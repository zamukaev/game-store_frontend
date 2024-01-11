import { FC, ReactNode } from "react";

import AppLink from "../appLink/AppLink";

import styles from "./styles.module.scss";

export enum ProductTypeTheme {
    HIT = "hit",
    PROMOTION = "promotion",
}

interface ProductTypeProps {
    className?: string;
    href?: string;
    theme?: ProductTypeTheme;
    children: ReactNode;
}

const ProductType: FC<ProductTypeProps> = (props) => {
    const {
        className = "",
        href,
        theme = ProductTypeTheme.HIT,
        children,
        ...OtherProps
    } = props;
    const cls = `${styles.productType} ${styles[theme]} ${className}`;
    return (
        <div data-testid="product-type" className={cls} {...OtherProps}>
            {href ? <AppLink href={href}>{children}</AppLink> : <>{children}</>}
        </div>
    );
};

export default ProductType;
