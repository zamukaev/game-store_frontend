"use client";
import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Product } from "@/shared/types/product";
import FavoritesIcon from "@/shared/icons/favoritesIcon/Favorites";
import CloseIcon from "@/shared/icons/closeIcon/CloseIcon";
import Counter from "@/shared/ui/counter/Counter";
import Checkbox from "@/shared/ui/checkbox/Checkbox";

import { formatCurrency } from "@/utils/string/formatCurrency";

import styles from "./styles.module.scss";

interface ProductCardLargeMobileProps {
    product: Product;
    selectAllCart?: boolean;
    onCheckHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    getCount: (count: number, productId: string) => void;
    removeCartItem: (productId: string) => void;
}

const ProductCardLargeMobile: FC<ProductCardLargeMobileProps> = (props) => {
    const { product, onCheckHandler, selectAllCart, getCount, removeCartItem } =
        props;

    const { urlImages, title, price, totalPrice, oldPrice, _id } = product;

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
            <div className={styles.product__icons}>
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
            <div className={styles.product__header}>
                <Checkbox
                    left="10px"
                    checked={selectAllCart}
                    onCheckHandler={onCheckHandler}
                    value={_id}
                />
                <Link
                    href={`/products/${product._id}`}
                    className={styles.image}
                >
                    <Image
                        src={urlImages[0]}
                        alt="product image"
                        width={110}
                        height={90}
                    />
                </Link>

                <div className={styles.info}>
                    <Link href={`/products/${product._id}`}>
                        <p className={styles.title}>{title}</p>
                    </Link>

                    <div className={styles.product__prices}>
                        <p className={styles.price}>
                            {formatCurrency(totalPrice)}
                        </p>
                        {oldPrice && (
                            <p className={styles.oldPrice}>
                                {formatCurrency(oldPrice)}
                            </p>
                        )}
                    </div>

                    <Counter
                        decrement={decrement}
                        increment={increment}
                        count={count}
                        initialCount={1}
                    />
                    {count > 1 && (
                        <span className={styles.item_price}>
                            {formatCurrency(price)}/шт
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCardLargeMobile;
