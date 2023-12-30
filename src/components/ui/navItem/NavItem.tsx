/* eslint-disable indent */
"use client";
import React from "react";

import CartIcon from "@/components/shared/icons/cartIcon/CartIcon";
import LoginIcon from "@/components/shared/icons/loginIcon/LoginIcon";
import Favorites from "@/components/shared/icons/favoritesIcon/Favorites";

import Button from "@/components/ui/button/Button";

import AppLink, { AppLinkTheme } from "@/components/ui/appLink/AppLink";

import styles from "./styles.module.scss";

export interface NavItemProps {
    text?: string;
    kind: "cart" | "login" | "favorites";
    href?: string;
    onClick?: () => void;
}

export const NavItem: React.FC<NavItemProps> = (props) => {
    const {
        text,
        kind,
        href,
        onClick,
    } = props;
    const className = `${styles.navItem}`;

    const getIcon = () => {
        switch (kind) {
            case "cart":
                return <CartIcon fill="black" />;
            case "login":
                return <LoginIcon fill="black" />;
            case "favorites":
                return <Favorites fill="black" />;
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
            {
                href ?
                    <AppLink href={href} theme={AppLinkTheme.DEFAULT} className={className}>
                        {getIcon()}
                        <p>{text && text}</p>
                    </AppLink>
                    :
                    <Button kind="clear" onClick={openModalHandler} className={className}>
                        {getIcon()}
                        <p>{text && text}</p>
                    </Button>
            }
        </>
    );
};