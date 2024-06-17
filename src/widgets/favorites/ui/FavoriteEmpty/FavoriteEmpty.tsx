import React from "react";

import FavoritesIcon from "@/shared/icons/favoritesIcon/Favorites";
import { AppLink } from "@/shared/ui";

import styles from "./styles.module.scss";

export const FavoriteEmpty = () => {
    return (
        <div className={styles.empty}>
            <div className={styles.block__no_goods}>
                <FavoritesIcon
                    fill={"var(--color-orange)"}
                    width={28}
                    height={28}
                    className={styles.icon}
                />
                <h1 className={styles.title}>
                    Вы пока не добавляли товары в избранное
                </h1>

                <AppLink href="/" className={styles.block__return_back_link}>
                    Перейти на главную
                </AppLink>
            </div>
        </div>
    );
};
