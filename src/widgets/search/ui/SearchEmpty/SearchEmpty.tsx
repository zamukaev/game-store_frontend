import React from "react";

import { useSearchParams } from "next/navigation";

import { AppLink, Headline } from "@/shared/ui";

import SearchIcon from "@/shared/icons/searchIcon/SearchIcon";

import { ArrowPrevGreyIcon } from "@/shared/icons/ArrowPrevGreyIcon/ArrowPrevGreyIcon";

import styles from "./styles.module.scss";

const SearchEmpty = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get("query");

    return (
        <div>
            <div>
                <AppLink className={styles.link} href="/">
                    <div className={styles.block__return_back_button}>
                        <ArrowPrevGreyIcon />
                        <p className={styles.block__return_back}>
                            Вернуться к покупкам
                        </p>
                    </div>
                </AppLink>
                <h1 className={styles.query_title}>{query}</h1>
            </div>
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
        </div>
    );
};

export default SearchEmpty;
