import React, { ButtonHTMLAttributes, FC } from "react";

import styles from "./styles.module.scss";

export interface ProductTypeProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    kind: "hit" | "discount";
}

const ProductType: FC<ProductTypeProps> = ({ kind = "hit" }) => {
    const typeClass = `${styles.type} ${
        kind === "hit" ? styles.hit : styles.discount
    }`;

    return (
        <div className={typeClass} data-testid="productType">
            {kind === "hit" ? "Хит" : "Акция"}
        </div>
    );
};

export default ProductType;
