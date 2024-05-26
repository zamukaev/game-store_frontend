"use client";
import React, { FC, useState } from "react";

import Image from "next/image";

import { Product } from "@/shared/types/product";
import FavoritesIcon from "@/shared/icons/favoritesIcon/Favorites";

import { formatCurrency } from "@/utils/string/formatCurrency";

import CloseIcon from "@/shared/icons/closeIcon/CloseIcon";

import Counter from "@/shared/ui/counter/Counter";
import Checkbox from "@/shared/ui/checkbox/Checkbox";

import styles from "./styles.module.scss";

interface ProductCardLargeProps {
    product: Product;
    selectAllCart?: boolean;
    onCheckHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    getCount: (count: number, productId: string) => void;
    removeCartItem: (productId: string) => void;
}

const ProductCardLarge: FC<ProductCardLargeProps> = (props) => {
    const { product, onCheckHandler, selectAllCart, getCount, removeCartItem } =
        props;

    const {
        hit,
        discount,
        urlImages,
        title,
        price,
        totalPrice,
        oldPrice,
        _id,
    } = product;

    const [count, setCount] = useState(1);

    const increment = () => {
        setCount((prevCount: number) => prevCount + 1);
        getCount(count + 1, _id);
    };

    const decrement = () => {
        setCount((prevCount: number) => Math.max(0, prevCount - 1));
        getCount(count - 1, _id);
    };

    return (
        <div className={styles.product} data-testid="productCard">
            <div className={styles.product__header}>
                <Checkbox
                    left="10px"
                    checked={selectAllCart}
                    onCheckHandler={onCheckHandler}
                    value={_id}
                />
                <div className={styles.image}>
                    <Image
                        src={urlImages[0]}
                        alt="product image"
                        width={162}
                        height={106}
                    />
                </div>
                <div className={styles.info}>
                    <p className={styles.title}>{title}</p>
                    <Counter
                        decrement={decrement}
                        increment={increment}
                        count={count}
                        initialCount={1}
                    />
                    {count > 1 && <span>{formatCurrency(price)}</span>}
                </div>
            </div>
            <div className={styles.product__footer}>
                <div className={styles.product__footer_icons}>
                    <FavoritesIcon
                        fill="black"
                        width={20}
                        height={20}
                        className={styles.favoriteIcon}
                    />
                    <CloseIcon
                        onClick={() => removeCartItem(_id)}
                        fill="black"
                        width={15}
                        height={15}
                    />
                </div>
                <div className={styles.product__footer_prices}>
                    <p className={styles.price}>{formatCurrency(totalPrice)}</p>
                    {oldPrice && (
                        <p className={styles.oldPrice}>
                            {formatCurrency(oldPrice)}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCardLarge;
