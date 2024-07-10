"use client";
import React, { FC, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Search } from "@/features/search";
import { getCategories } from "@/features/categories";

import { AppLink, Logo, NavItem } from "@/shared/ui";
import ArrowRightIcon from "@/shared/icons/arrowRightIcon/ArrowRightIcon";

import styles from "./style.module.scss";

const HeaderMobile: FC = () => {
    const [isOpenMenu, setInOpenMenu] = useState(false);

    const { data: categories } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
    });

    const isOpenMenuHandler = () => {
        setInOpenMenu(!isOpenMenu);
    };

    useEffect(() => {
        if (isOpenMenu) {
            document.documentElement.style.overflow = "hidden";
        }
        return () => {
            document.documentElement.style.overflow = "auto";
        };
    }, [isOpenMenu]);

    return (
        <div className={styles.container}>
            <div className={styles.topHeader}>
                <Logo />
                <div>
                    <input
                        id="menu__toggle"
                        className={styles.menu__toggle}
                        type="checkbox"
                        onClick={isOpenMenuHandler}
                        readOnly
                        checked={isOpenMenu}
                    />
                    <label className={styles.menu__btn} htmlFor="menu__toggle">
                        <span></span>
                    </label>

                    <div className={styles.menu__box}>
                        <div
                            className={styles.menu__header}
                            onClick={isOpenMenuHandler}
                        >
                            <Logo />
                        </div>
                        <div className={styles.categories}>
                            {categories?.slice(0, 6).map((category) => (
                                <AppLink
                                    key={category._id}
                                    className={styles.category}
                                    href={`/catalog/${category.originTitle}`}
                                    onClick={isOpenMenuHandler}
                                >
                                    {category.title}
                                    <ArrowRightIcon />
                                </AppLink>
                            ))}
                            <AppLink
                                href="/catalog"
                                className={styles.allCategories}
                                onClick={isOpenMenuHandler}
                            >
                                Все категории
                            </AppLink>
                        </div>
                        <div className={styles.navItems}>
                            <NavItem
                                classNames={styles.navItem}
                                kind="favorites"
                                text="Избранное"
                                href="/favorites"
                                onClick={isOpenMenuHandler}
                            />
                            <NavItem
                                classNames={styles.navItem}
                                kind="cart"
                                text="Корзина"
                                href="/cart"
                                onClick={isOpenMenuHandler}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.search}>
                <Search />
            </div>
        </div>
    );
};

export default HeaderMobile;
