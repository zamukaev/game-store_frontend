import React from "react";

import { formatCurrency } from "@/utils/string/formatCurrency";

import Skeleton from "../../skeleton/Skeleton";

import styles from "./styles.module.scss";

const ProductCardLargeLoader = () => {
    return (
        <div className={styles.product}>
            <div className={styles.product__header}>
                <Skeleton
                    className={styles.loader_checkbox}
                    width={28}
                    height={28}
                    border="25px"
                />
                <div className={styles.image}>
                    <Skeleton width={162} height={106} border="3px" />
                </div>
                <div className={styles.info}>
                    <Skeleton
                        className={styles.title}
                        width={200}
                        height={20}
                        border="3px"
                    />
                    <Skeleton width={90} height={30} border="10px" />
                </div>
            </div>
            <div className={styles.product__footer}>
                <div className={styles.product__footer_icons}>
                    <Skeleton
                        width={20}
                        height={20}
                        className={styles.favoriteIcon}
                        border="25px"
                    />
                    <Skeleton width={15} height={15} border="25px" />
                </div>
                <div className={styles.product__footer_prices}>
                    <Skeleton
                        className={styles.price}
                        width={97}
                        height={24}
                        border="3px"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCardLargeLoader;
