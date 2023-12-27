import React, { ReactNode, ButtonHTMLAttributes, FC } from "react";

import CartIcon from "../../shared/icons/cartIcon/CartIcon";

import styles from "./styles.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    kind?: "default" | "gray" | "cart" | "small";
}

const Button: FC<ButtonProps> = ({ children, kind = "default", ...props }) => {
    const className = `${styles.button} ${styles[kind] || ""}`;

    return (
        <button className={className} {...props}>
            {kind === "cart" && <CartIcon />}
            {children}
        </button>
    );
};

export default Button;
