"use client";

import React, { FC } from "react";

import { Logo } from "@/shared/ui";

import { Search } from "@/features/search";

import NavItems from "@/features/navItems/ui/NavItems";

import styles from "./style.module.scss";

const Header: FC = () => {
    return (
        <div className={styles.container}>
            <Logo />
            <Search />
            <NavItems />
        </div>
    );
};

export default Header;
