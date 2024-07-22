import React from "react";

import Skeleton from "../../skeleton/Skeleton";

import styles from "./styles.module.scss";

const SubcategoryLoader = ({ className }: { className?: string }) => {
    const cls = `${styles.row} ${className}`;
    return (
        <div className={cls}>
            <div className={styles.image}>
                <Skeleton width={150} height={150} />
            </div>
            <div className={styles.text}>
                <Skeleton width={200} height={18} />
            </div>
        </div>
    );
};

export default SubcategoryLoader;
