import React, { FC } from "react";

import { Product } from "@/shared/types/product";
import FavoritesIcon from "@/components/shared/icons/favoritesIcon/Favorites";

import styles from "./styles.module.scss";

interface ProductCardProps {
    product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    return (
        <div className={styles.product}>
            <div className={styles.product__header}>
                <div className={styles.product__header_productTypes}>
                    <h1>h</h1>
                </div>
                <FavoritesIcon
                    fill="black"
                    width={25}
                    height={25}
                    className={styles.favoriteIcon}
                />
            </div>
        </div>
    );
};

export default ProductCard;
