import React from "react";

import { AppLink, Headline } from "@/shared/ui";

import SearchIcon from "@/shared/icons/searchIcon/SearchIcon";

import styles from "./styles.module.scss";

const SearchEmpty = () => {
    return (
        <div className={styles.empty}>
            <div className={styles.block__no_goods}>
                <SearchIcon
                    width={40}
                    height={40}
                    className={styles.icon}
                    fill="#FF6B00"
                />
                <Headline className={styles.title}>
                    Нам не удалось найти то, что вы искали
                </Headline>
                <button className={styles.back_btn}>
                    <AppLink
                        className={styles.block__return_back_link}
                        href="/"
                    >
                        Перейти на главную
                    </AppLink>
                </button>
            </div>
        </div>
    );
};

export default SearchEmpty;
