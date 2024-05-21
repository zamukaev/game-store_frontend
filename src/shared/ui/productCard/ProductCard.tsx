"use client";

import React, { FC, useEffect, useState } from "react";

import Image from "next/image";

import useFavoritesStore from "@/widgets/favorites/favorites-store";

import { Product } from "@/shared/types/product";
import FavoritesIcon from "@/shared/icons/favoritesIcon/Favorites";

import { formatCurrency } from "@/utils/string/formatCurrency";

import ProductType from "../productType/ProductType";

import Card from "../card/Card";

import styles from "./styles.module.scss";

interface ProductCardProps {
    product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const { hit, discount, urlImages, title, price, oldPrice } = product;

    const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
    const favorites = useFavoritesStore((state) => state.favorites);

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        setIsFavorite(favorites.includes(product._id));
    });

    const toggleFavoriteHandle = () => {
        toggleFavorite(product._id);
    };

    return (
        <div className={styles.product} data-testid="productCard">
            <div className={styles.product__header}>
                <div className={styles.product__header_types}>
                    {hit && <ProductType kind="hit" />}
                    {discount && <ProductType kind="discount" />}
                </div>
                <FavoritesIcon
                    onClick={toggleFavoriteHandle}
                    fill={isFavorite ? "var(--color-orange)" : "black"}
                    width={28}
                    height={28}
                    className={styles.favoriteIcon}
                />
            </div>
            <div className={styles.image}>
                <Image
                    src={urlImages[0]}
                    alt="product image"
                    width={182}
                    height={126}
                />
            </div>
            <p className={styles.title}>{title}</p>
            <div className={styles.product__footer}>
                <div className={styles.product__footer_prices}>
                    <p className={styles.price}>{formatCurrency(price)}</p>
                    {oldPrice && (
                        <p className={styles.oldPrice}>
                            {formatCurrency(oldPrice)}
                        </p>
                    )}
                </div>
                <div className={styles.product__footer_cart}>
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
