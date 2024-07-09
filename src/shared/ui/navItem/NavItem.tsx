/* eslint-disable indent */
"use client";
import React from "react";

import CartIcon from "@/shared/icons/cartIcon/CartIcon";
import LoginIcon from "@/shared/icons/loginIcon/LoginIcon";
import FavoritesIcon from "@/shared/icons/favoritesIcon/Favorites";

import Button from "@/shared/ui/button/Button";

import AppLink, { AppLinkTheme } from "@/shared/ui/appLink/AppLink";

import styles from "./styles.module.scss";

export interface NavItemProps {
    text?: string;
    kind: "cart" | "login" | "favorites";
    href?: string;
    onClick?: () => void;
    classNames?: string;
}

export const NavItem: React.FC<NavItemProps> = (props) => {
    const { text, kind, href, onClick, classNames } = props;
    const className = `${styles.navItem} ${classNames}`;

    const getIcon = () => {
        switch (kind) {
            case "cart":
                return <CartIcon fill="black" />;
            case "login":
                return <LoginIcon fill="black" />;
            case "favorites":
                return <FavoritesIcon fill="black" />;
            default:
                null;
        }
    };

    const openModalHandler = () => {
        if (href) {
            console.log(href);
        }
        if (onClick) {
            onClick();
        }
        return;
    };

    return (
        <>
            {href ? (
                <AppLink
                    href={href}
                    theme={AppLinkTheme.DEFAULT}
                    className={className}
                    onClick={onClick}
                >
                    {getIcon()}
                    <p className={styles.text}>{text && text}</p>
                </AppLink>
            ) : (
                <Button
                    kind="clear"
                    onClick={openModalHandler}
                    className={className}
                >
                    {getIcon()}
                    <p className={styles.text}>{text && text}</p>
                </Button>
            )}
        </>
    );
};
