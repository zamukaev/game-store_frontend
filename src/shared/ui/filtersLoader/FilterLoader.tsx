import { FC } from "react";

import Skeleton from "../skeleton/Skeleton";

import styles from "./styles.module.scss";

const FilterLoader = () => {
    const cls = `${styles.filters}`;

    return (
        <div className={cls}>
            <div style={{ marginBottom: "10px" }} className={styles.price}>
                <Skeleton
                    className={styles.title}
                    width={60}
                    height={22}
                    border="3px"
                />
                <div className={styles.inputs}>
                    <Skeleton
                        className={styles.priceItem}
                        width={125}
                        height={38}
                        border="10px"
                    />
                    <Skeleton width={125} height={38} border="10px" />
                </div>
                <div style={{ marginTop: "25px" }}>
                    <Skeleton width={300} height={4} />
                </div>
            </div>
            <div className={styles.options}>
                <div className={styles.promotion}>
                    <Skeleton
                        className={styles.title}
                        width={55}
                        height={16}
                        border="3px"
                    />
                    <Skeleton width={50} height={25} border="25px" />
                </div>
                <div className={styles.hits}>
                    <Skeleton
                        className={styles.title}
                        width={55}
                        height={16}
                        border="3px"
                    />
                    <Skeleton width={50} height={25} border="25px" />
                </div>
                <div className={styles.InStock}>
                    <Skeleton
                        className={styles.title}
                        width={90}
                        height={16}
                        border="3px"
                    />
                    <Skeleton width={50} height={25} border="25px" />
                </div>
            </div>
        </div>
    );
};

export default FilterLoader;
