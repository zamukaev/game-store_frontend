"use client";
import React, { FC, useCallback, useState } from "react";

import { Search } from "@/features/search";
import { NavItems } from "@/features/navItems";
import { AuthModal } from "@/features/authByNumber";
import { Logo } from "@/shared/ui";

import styles from "./style.module.scss";

const Header: FC = () => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const showModalHandler = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const closeModalHandler = () => {
        setIsAuthModal(false);
    };

    return (
        <div className={styles.container}>
            <Logo />
            <Search />
            <NavItems showModalHandler={showModalHandler} />
            <AuthModal isOpen={isAuthModal} onClose={closeModalHandler} />
        </div>
    );
};

export default Header;
