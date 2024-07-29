import React from "react";

import { useCallback, useEffect, useMemo, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import Image from "next/image";

import Link from "next/link";

import { pluralize } from "@/utils/string/pularize";
import { formatCurrency } from "@/utils/string/formatCurrency";

import {
    Button,
    Checkbox,
    Counter,
    GoBackButton,
    Headline,
    HeadlineSize,
    ProductCardLarge,
} from "@/shared/ui";
import { Product } from "@/shared/types/product";
import { CartInterface } from "@/shared/types/cart";
import { OrderDetails } from "@/features/orderDetails";

import localStorageApi from "@/utils/data/localStorageApi";

import { getCart } from "@/widgets/cart/api";

import CloseIcon from "@/shared/icons/closeIcon/CloseIcon";

import FavoritesIcon from "@/shared/icons/favoritesIcon/Favorites";

import InCart from "@/features/inCart";

import styles from "./styles.module.scss";

export const ModalCartProducts = () => {
    const cartIds = localStorageApi.getDataFromLocalSt("cart");

    const [carts, setCarts] = useState<CartInterface[]>([]);
    const [selectedCart, setSelectedCart] = useState<CartInterface[]>([]);
    const [selectAllCart, setSelectAllCart] = useState<boolean>(true);
    const [selectedCartIds, setSelectedCartIds] = useState<string[]>([]);

    const totalSelectedItems = useMemo(
        () => selectedCart.reduce((total, item) => total + item.count, 0),
        [selectedCart]
    );

    const totalPrice = useMemo(
        () => selectedCart.reduce((total, item) => total + item.totalPrice, 0),
        [selectedCart]
    );

    const { data, isLoading, error } = useQuery({
        queryKey: ["getProductsByIds", cartIds],
        queryFn: () => {
            if (cartIds?.length) {
                return getCart(cartIds);
            }
        },
        enabled: !!cartIds?.length,
    });

    useEffect(() => {
        if (data) {
            setCarts(data);
        }
    }, [data]);

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

    return (
        <div className={styles.parent__flex}>
            <div className={styles.justify__between}>
                <p className={styles.items}>
                    {pluralize(
                        totalSelectedItems,
                        "товар",
                        "товара",
                        "товаров"
                    )}
                </p>
                <Button
                    onClick={removeSelectedCart}
                    kind="clear"
                    className={styles.delete_all}
                >
                    Очистить список
                </Button>
            </div>

            <div className="good-with-description">
                {carts.map((cart: Product) => (
                    <li className={styles.cart_item} key={cart._id}>
                        <div
                            className={styles.product}
                            data-testid="productCard"
                        >
                            <div className={styles.product__header}>
                                <Image
                                    className={styles.good__image}
                                    src={cart.urlImages[0]}
                                    alt="product image"
                                    width={162}
                                    height={106}
                                />

                                <div className={styles.info}>
                                    <p className={styles.title}>
                                        {cart.title}
                                        <span className={styles.count}>
                                            {cart.count} шт.
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className={styles.product__footer}>
                                <div className={styles.product__footer_prices}>
                                    <p className={styles.price}>
                                        {formatCurrency(cart.price)}
                                    </p>
                                </div>
                                <div className={styles.product__footer_icons}>
                                    <CloseIcon
                                        onClick={() => removeCartItem(cart._id)}
                                        className={styles.close__icon}
                                        fill="black"
                                        width={15}
                                        height={15}
                                    />
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </div>
            <div className={styles.result__block}>
                <div>
                    Итого:
                    <p className={styles.order_price}>
                        {formatCurrency(totalPrice)}
                    </p>
                </div>
                <InCart />
            </div>
        </div>
    );
};
