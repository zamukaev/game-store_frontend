import React from "react";

import Skeleton from "../skeleton/Skeleton";

import styles from "./styles.module.scss";

const ProductCardLoader = () => {
    return (
        <div className={styles.product}>
            <div className={styles.product__header}>
                <div className={styles.product__header_types}>
                    <Skeleton width={80} height={29} border="15px" />
                    <Skeleton width={80} height={29} border="15px" />
                </div>
                <Skeleton
                    className={styles.favoriteIcon}
                    width={28}
                    height={28}
                    border="25px"
                />
            </div>

            <div className={styles.image}>
                <Skeleton width={182} height={126} border="3px" />
            </div>
            <div style={{ marginBottom: "40px" }}>
                <Skeleton
                    className={styles.title}
                    width={374}
                    height={20}
                    border="3px"
                />
            </div>

            <div className={styles.product__footer}>
                <div className={styles.product__footer_prices}>
                    <Skeleton
                        className={styles.price}
                        width={55}
                        height={24}
                        border="3px"
                    />
                </div>
                <div className={styles.product__footer_cart}>
                    <Skeleton
                        className={styles.card}
                        width={54}
                        height={44}
                        border="25px"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCardLoader;
