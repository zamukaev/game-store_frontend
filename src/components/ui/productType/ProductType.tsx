import React, { ReactNode, ButtonHTMLAttributes, FC } from "react";

import styles from "./styles.module.scss";

export interface ProductTypeProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    kind?: "hit" | "discount";
}

const ProductType: FC<ProductTypeProps> = ({ kind = "hit" }) => {
    return (
        <div className={styles.type}>{kind === "hit" ? "Хит" : "Акция"}</div>
    );
};

export default ProductType;
