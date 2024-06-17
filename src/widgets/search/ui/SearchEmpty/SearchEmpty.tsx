import React from "react";

import { useSearchParams } from "next/navigation";

import { AppLink, Button, GoBackButton, Headline } from "@/shared/ui";
import SearchIcon from "@/shared/icons/searchIcon/SearchIcon";

import styles from "./styles.module.scss";

const SearchEmpty = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get("query");

    return (
        <div>
            <div>
                <GoBackButton
                    href="/"
                    className={styles.link}
                    text="Вернуться к покупкам"
                />
                <Headline className={styles.query_title}>{query}</Headline>
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
                    <Button className={styles.back_btn}>
                        <AppLink
                            className={styles.block__return_back_link}
                            href="/"
                        >
                            Перейти на главную
                        </AppLink>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SearchEmpty;
