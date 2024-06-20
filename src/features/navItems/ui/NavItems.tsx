import React, { FC } from "react";

import { NavItem } from "@/shared/ui";

import styles from "./styles.module.scss";

interface NavItemsProps {
    showModalHandler?: () => void;
}

const NavItems: FC<NavItemsProps> = (props) => {
    // const { showModalHandler } = props;
    return (
        <div className={styles.container}>
            {/* <NavItem kind="login" text="Войти" onClick={showModalHandler} /> */}
            <NavItem kind="favorites" text="Избранное" href="/favorites" />
            <NavItem kind="cart" text="Корзина" href="/cart" />
        </div>
    );
};

export default NavItems;
