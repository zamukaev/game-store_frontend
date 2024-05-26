"use client";
import { useCallback, useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import {
    Button,
    Checkbox,
    GoBackButton,
    Headline,
    HeadlineSize,
    ProductCardLarge,
} from "@/shared/ui";

import { Product } from "@/shared/types/product";

import { formatCurrency } from "@/utils/string/formatCurrency";

import localStorageApi from "@/utils/data/localStorageApi";

import { CartInterface } from "@/shared/types/cart";

import { getCart } from "../api";

import styles from "./styles.module.scss";
import CartEmpty from "./cartEmpty/CartEmpty";
import CartLoader from "./cartLoader/CartLoader";

const Cart = () => {
    const cls = `${styles.cart_container}`;
    const cartIds = localStorageApi.getDataFromLocalSt("cart");

    const { data, isLoading, error } = useQuery({
        queryKey: ["getProductsByIds"],
        queryFn: () => {
            if (cartIds?.length) {
                return getCart(cartIds);
            }
        },
    });

    const [carts, setCarts] = useState<CartInterface[]>([]);
    const [selectedCartState, setSelectedCartState] = useState<CartInterface[]>(
        []
    );
    const [selectAllCart, setSelectAllCart] = useState<boolean>(true);
    const totalSelectedItems = selectedCartState.reduce(
        (total, item) => total + item.count,
        0
    );
    const totalPrice = selectedCartState.reduce(
        (total, item) => total + item.totalPrice,
        0
    );

    const cartCheckHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>): void => {
            const productId = event.target.value;
            const updatedCarts = carts.map((cart) =>
                cart._id === productId
                    ? { ...cart, selected: event.target.checked }
                    : cart
            );
            setCarts(updatedCarts);
            setSelectedCartState(updatedCarts.filter((cart) => cart.selected));
        },
        [carts]
    );

    const selectAllCartHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>): void => {
            const isSelected = event.target.checked;
            const updatedCarts = carts.map((cart) => ({
                ...cart,
                selected: isSelected,
            }));
            setCarts(updatedCarts);
            setSelectedCartState(isSelected ? updatedCarts : []);
            setSelectAllCart(isSelected);
        },
        [carts]
    );

    const checkIsCartSelected = useCallback((): void => {
        setSelectAllCart(carts.every((cart) => cart.selected));
    }, [carts]);

    const removeSelectedCart = (): void => {
        setSelectedCartState((prev: Product[]) => []);
        setCarts((prev) => prev.filter((cart) => !cart.selected));
        localStorageApi.removeSelectedCart("cart", selectedCartState);
    };

    const getCount = (count: number, productId: string): void => {
        if (count < 1) {
            setCarts((prev: CartInterface[]) =>
                prev.filter((cart: Product) => cart._id !== productId)
            );
            localStorageApi.removeDataFromLocalSt("cart", productId);
        }

        setSelectedCartState((prev: CartInterface[]) =>
            prev.map((cart: CartInterface) =>
                cart._id === productId
                    ? { ...cart, count: count, totalPrice: cart.price * count }
                    : cart
            )
        );

        setCarts((prev: CartInterface[]) =>
            prev.map((cart: CartInterface) =>
                cart._id === productId
                    ? { ...cart, count: count, totalPrice: cart.price * count }
                    : cart
            )
        );
    };

    const removeCartItem = (productId: string) => {
        localStorageApi.removeDataFromLocalSt("cart", productId);
        setCarts((prev: CartInterface[]) =>
            prev.filter((cart: Product) => cart._id !== productId)
        );
    };

    useEffect(() => {
        checkIsCartSelected();
    }, [checkIsCartSelected]);

    useEffect(() => {
        if (data) {
            setCarts(data);
            setSelectedCartState(data);
        }
    }, [data]);

    if (isLoading) {
        return (
            <section className={cls}>
                <CartLoader />
            </section>
        );
    }

    return (
        <section className={cls}>
            <GoBackButton
                className={styles.back_btn}
                text="Вернуться к покупкам"
            />
            <Headline className={styles.cart_title} Size={HeadlineSize.L}>
                Корзина
            </Headline>
            {!!carts.length ? (
                <div className={styles.cart_content}>
                    <ul className={styles.cart_list}>
                        <div className={styles.cart_order_select}>
                            <label className={styles.order_select_label}>
                                <Checkbox
                                    top="-5px"
                                    left="10px"
                                    checked={selectAllCart}
                                    value="checkAll"
                                    onCheckHandler={selectAllCartHandler}
                                />
                                <span>Выбрать все</span>
                            </label>
                            <Button
                                onClick={removeSelectedCart}
                                kind="clear"
                                className={styles.delete_all}
                            >
                                Удалить выбранные
                            </Button>
                        </div>
                        {carts.map((cart: Product) => (
                            <li className={styles.cart_item} key={cart._id}>
                                <ProductCardLarge
                                    getCount={getCount}
                                    onCheckHandler={cartCheckHandler}
                                    product={cart}
                                    selectAllCart={cart.selected}
                                    removeCartItem={removeCartItem}
                                />
                            </li>
                        ))}
                    </ul>
                    <div className={styles.cart_order}>
                        <Headline
                            className={styles.order_title}
                            Size={HeadlineSize.M}
                        >
                            Детали заказа
                        </Headline>
                        <div className={styles.order_details}>
                            {!!totalSelectedItems ? (
                                <>
                                    <div className={styles.order_items}>
                                        <span className={styles.total}>
                                            Итого:
                                        </span>
                                        <p className={styles.items}>
                                            {totalSelectedItems} товара
                                        </p>
                                    </div>
                                    <p className={styles.order_price}>
                                        {formatCurrency(totalPrice)}
                                    </p>
                                </>
                            ) : (
                                <div>
                                    <Headline
                                        className={styles.empty_title}
                                        Size={HeadlineSize.S}
                                    >
                                        Нет выбранных товаров.
                                    </Headline>
                                    <p className={styles.empty_text}>
                                        {" "}
                                        Пожалуйста выберите товар чтобы оформить
                                        заказ!
                                    </p>
                                </div>
                            )}
                        </div>
                        <Button disabled={!totalSelectedItems} kind="cart">
                            Перейти к оформлению
                        </Button>
                    </div>
                </div>
            ) : (
                <CartEmpty className={styles.cart_empty} />
            )}
        </section>
    );
};

export default Cart;
