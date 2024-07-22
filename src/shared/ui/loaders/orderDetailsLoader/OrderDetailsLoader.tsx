import Skeleton from "@/shared/ui/skeleton/Skeleton";

import styles from "./styles.module.scss";

const OrderDetailsLoader = () => {
    return (
        <div className={styles.cart_order}>
            <Skeleton
                className={styles.order_title}
                width={100}
                height={17}
                border="3px"
            />
            <Skeleton width={"100%"} height={3} border="3px" />
            <div className={styles.order_details}>
                <div className={styles.order_items}>
                    <Skeleton
                        className={styles.total}
                        width={44}
                        height={10}
                        border="3px"
                    />
                    <Skeleton
                        className={styles.items}
                        width={69}
                        height={10}
                        border="3px"
                    />
                </div>
                <Skeleton
                    className={styles.order_price}
                    width={74}
                    height={20}
                    border="3px"
                />
            </div>
            <Skeleton
                className={styles.order__btn}
                width={369}
                height={50}
                border="20px"
            />
        </div>
    );
};

export default OrderDetailsLoader;
