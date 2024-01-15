import React, { FC } from "react";

import Image from "next/image";

import { Product } from "@/shared/types/product";
import FavoritesIcon from "@/components/shared/icons/favoritesIcon/Favorites";

import { formatCurrency } from "@/utils/string/formatCurrency";

import CloseIcon from "@/components/shared/icons/closeIcon/CloseIcon";

import Counter from "@/components/ui/counter/Counter";
import Checkbox from "@/components/ui/checkbox/Checkbox";

import ProductType from "../productType/ProductType";

import Card from "../card/Card";

import styles from "./styles.module.scss";

interface ProductCardLargeProps {
    product: Product;
}

const ProductCardLarge: FC<ProductCardLargeProps> = ({ product }) => {
    const { hit, discount, urlImages, title, price, oldPrice } = product;

    return (
        <div className={styles.product} data-testid="productCard">
            <div className={styles.product__header}>
                <Checkbox />
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
                    <Counter />
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
                    <CloseIcon fill="black" width={15} height={15} />
                </div>
                <div className={styles.product__footer_prices}>
                    <p className={styles.price}>{formatCurrency(price)}</p>
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
