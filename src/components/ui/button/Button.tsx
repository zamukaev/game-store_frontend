import React, { ReactNode, ButtonHTMLAttributes, FC } from "react";

import styles from "./styles.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    kind?: "default" | "gray" | "cart" | "small" | "clear";
}

const Button: FC<ButtonProps> = ({ children, kind = "default", className, ...props }) => {
    const cls = `${styles.button} ${styles[kind]} ${className}`;

    return (
        <button className={cls} {...props}>
            {children}
        </button>
    );
};

export default Button;
