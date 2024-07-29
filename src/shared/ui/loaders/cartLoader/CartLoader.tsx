import React from "react";

import Skeleton from "@/shared/ui/skeleton/Skeleton";
import ProductCardLargeLoader from "@/shared/ui/loaders/productCartLargeLoader/ProductCardLargeLoader";

import { OrderDetailsLoader, ProductCardLargeLoaderMobile } from "@/shared/ui";

import styles from "./styles.module.scss";

const CartLoader = ({ width }: { width: number }) => {
    return (
        <>
            <div className={styles.cart_content}>
                <ul className={styles.cart_list}>
                    <div
                        style={{ height: 51.19 }}
                        className={styles.cart_order_select}
                    >
                        <div className={styles.order_select_label}>
                            <Skeleton
                                width={28.8}
                                height={28.8}
                                border="25px"
                            />
                            <Skeleton
                                className={styles.select_all}
                                width={101}
                                height={20}
                                border="3px"
                            />
                        </div>
                        <Skeleton
                            className={styles.delete_all}
                            width={158}
                            height={20}
                            border="3px"
                        />
                    </div>
                    <Skeleton
                        className={styles.delete_all}
                        width={"100%"}
                        height={1}
                        border="3px"
                    />
                    {[1, 2].map((item: number) => (
                        <React.Fragment key={item}>
                            <Skeleton
                                className={styles.delete_all}
                                width={"100%"}
                                height={1}
                                border="3px"
                            />
                            <li className={styles.cart_item}>
                                {width > 545 ? (
                                    <ProductCardLargeLoader />
                                ) : (
                                    <ProductCardLargeLoaderMobile />
                                )}
                            </li>
                        </React.Fragment>
                    ))}
                </ul>
                <OrderDetailsLoader />
            </div>
        </>
    );
};

export default CartLoader;
