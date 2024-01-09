import React, { ReactNode, FC, AnchorHTMLAttributes } from "react";

import Link from "next/link";

import styles from "./styles.module.scss";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    DEFAULT = "default",
    NAVITEM = "navItem",
}

export interface AppLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    children: ReactNode;
    theme?: AppLinkTheme;
    href: string;
}

const AppLink: FC<AppLinkProps> = (props) => {
    const {
        children,
        theme = AppLinkTheme.DEFAULT,
        className = "",
        href,
        ...otherProps
    } = props;
    const cls = `${styles.link} ${styles[theme]} ${className}`;

    return (
        <Link href={href} className={cls} {...otherProps}>
            {children}
        </Link>
    );
};

export default AppLink;
