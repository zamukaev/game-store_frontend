import React from "react";

import Skeleton from "../../skeleton/Skeleton";

import styles from "./styles.module.scss";

const ProductCardLargeLoaderMobile = () => {
    return (
        <div className={styles.product} data-testid="productCard">
            <div className={styles.product__icons}>
                <Skeleton
                    width={20}
                    height={20}
                    border="25px"
                    className={styles.favoriteIcon}
                />
                <Skeleton border="25px" width={15} height={15} />
            </div>
            <div className={styles.product__header}>
                <Skeleton
                    className={styles.loader_checkbox}
                    width={28}
                    height={28}
                    border="25px"
                />
                <div className={styles.image}>
                    <Skeleton width={110} height={110} border="3px" />
                </div>

                <div className={styles.info}>
                    <Skeleton
                        width={150}
                        height={40}
                        border="3px"
                        className={styles.title}
                    />
                    <div className={styles.product__prices}>
                        <Skeleton
                            width={55}
                            height={20}
                            border="3px"
                            className={styles.title}
                        />
                    </div>
                    <Skeleton width={92} height={30} border="10px" />
                </div>
            </div>
        </div>
    );
};

export default ProductCardLargeLoaderMobile;
