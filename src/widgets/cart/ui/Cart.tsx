"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import {
    Button,
    Checkbox,
    GoBackButton,
    Headline,
    HeadlineSize,
    ProductCardLarge,
    ProductCardLargeMobile,
} from "@/shared/ui";
import { Product } from "@/shared/types/product";
import { CartInterface } from "@/shared/types/cart";
import { OrderDetails } from "@/features/orderDetails";

import localStorageApi from "@/utils/data/localStorageApi";

import { getCart } from "../api";

import CartLoader from "../../../shared/ui/loaders/cartLoader/CartLoader";

import CartEmpty from "./cartEmpty/CartEmpty";

import styles from "./styles.module.scss";

const Cart = () => {
    const cls = `${styles.cart_container}`;
    const cartIds = localStorageApi.getDataFromLocalSt("cart");
    const [carts, setCarts] = useState<CartInterface[]>([]);
    const [selectedCart, setSelectedCart] = useState<CartInterface[]>([]);
    const [selectAllCart, setSelectAllCart] = useState<boolean>(true);
    const [selectedCartIds, setSelectedCartIds] = useState<string[]>([]);
    const [width, setWidth] = useState(0);
    const totalSelectedItems = useMemo(
        () => selectedCart.reduce((total, item) => total + item.count, 0),
        [selectedCart]
    );

    const totalPrice = useMemo(
        () => selectedCart.reduce((total, item) => total + item.totalPrice, 0),
        [selectedCart]
    );

    const { data, isLoading, error } = useQuery({
        queryKey: ["getProductsByIds"],
        queryFn: () => {
            if (cartIds?.length) {
                return getCart(cartIds);
            }
        },
    });

    const cartCheckHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>): void => {
            const productId = event.target.value;
            const updatedCarts = carts.map((cart) =>
                cart._id === productId
                    ? { ...cart, selected: event.target.checked }
                    : cart
            );
            setCarts(updatedCarts);
            setSelectedCart(updatedCarts.filter((cart) => cart.selected));
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
            setSelectedCart(isSelected ? updatedCarts : []);
            setSelectAllCart(isSelected);
        },
        [carts]
    );

    const checkIsCartSelected = useCallback((): void => {
        setSelectAllCart(carts.every((cart) => cart.selected));
    }, [carts]);

    const getCount = useCallback((count: number, productId: string): void => {
        if (count < 1) {
            setCarts((prev: CartInterface[]) =>
                prev.filter((cart: Product) => cart._id !== productId)
            );
            localStorageApi.removeDataFromLocalSt("cart", productId);
        }

        setSelectedCart((prev: CartInterface[]) =>
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
    }, []);

    const removeSelectedCart = (): void => {
        localStorageApi.removeSelectedCart("cart", selectedCartIds);
        setCarts((prev) => prev.filter((cart) => !cart.selected));
        setSelectedCart((prev: Product[]) => []);
    };

    const removeCartItem = (productId: string) => {
        localStorageApi.removeDataFromLocalSt("cart", productId);
        setCarts((prev: CartInterface[]) =>
            prev.filter((cart: CartInterface) => cart._id !== productId)
        );
        setSelectedCart((prev: CartInterface[]) =>
            prev.filter((cart: CartInterface) => cart._id !== productId)
        );
    };

    const getSelectedCartIds = useCallback(() => {
        const ids = selectedCart.map((cart) => cart._id);
        setSelectedCartIds((prev: string[]) => ids);
    }, [selectedCart]);

    useEffect(() => {
        checkIsCartSelected();
        getSelectedCartIds();
    }, [checkIsCartSelected, getSelectedCartIds]);

    useEffect(() => {
        if (cartIds?.length) {
            if (data) {
                setCarts(data);
                setSelectedCart(data);
            }
        }
    }, [data]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => setWidth(window.innerWidth);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    return (
        <section className={cls}>
            <GoBackButton
                href="/"
                className={styles.back_btn}
                text="Вернуться к покупкам"
            />
            <Headline className={styles.cart_title} Size={HeadlineSize.L}>
                Корзина
            </Headline>
            {isLoading ? (
                <CartLoader width={width} />
            ) : !!carts.length ? (
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
                                <span className={styles.select_all}>
                                    Выбрать все
                                </span>
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
                                {width > 545 ? (
                                    <ProductCardLarge
                                        getCount={getCount}
                                        onCheckHandler={cartCheckHandler}
                                        product={cart}
                                        selectAllCart={cart.selected}
                                        removeCartItem={removeCartItem}
                                    />
                                ) : (
                                    <ProductCardLargeMobile
                                        getCount={getCount}
                                        onCheckHandler={cartCheckHandler}
                                        product={cart}
                                        selectAllCart={cart.selected}
                                        removeCartItem={removeCartItem}
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                    <OrderDetails
                        totalPrice={totalPrice}
                        totalSelectedItems={totalSelectedItems}
                    />
                </div>
            ) : (
                <CartEmpty className={styles.cart_empty} />
            )}
        </section>
    );
};

export default Cart;
