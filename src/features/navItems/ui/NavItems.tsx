import React from "react";

import { NavItem } from "@/shared/ui";

import styles from "./styles.module.scss";

const NavItems = () => {
    return (
        <div className={styles.container}>
            <NavItem kind="login" text="Войти" />
            <NavItem kind="favorites" text="Избранное" href="/favorites" />
            <NavItem kind="cart" text="Корзина" href="/cart" />
        </div>
    );
};

export default NavItems;
