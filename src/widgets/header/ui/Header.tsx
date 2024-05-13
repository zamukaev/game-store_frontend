"use client";

import React, { FC, useCallback, useState } from "react";

import { Logo } from "@/shared/ui";

import { Search } from "@/features/search";

import NavItems from "@/features/navItems/ui/NavItems";

import Modal from "@/shared/ui/modal/Modal";

import LoginModal from "@/features/authByNumber/ui/authModal/AuthModal";

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
            <LoginModal isOpen={isAuthModal} onClose={closeModalHandler} />
        </div>
    );
};

export default Header;
