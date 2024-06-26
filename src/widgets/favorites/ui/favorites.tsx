"use client";

import { useQuery } from "@tanstack/react-query";

import { AppLink, GoBackButton, ProductCard } from "@/shared/ui";
import { ArrowPrevGreyIcon } from "@/shared/icons/ArrowPrevGreyIcon/ArrowPrevGreyIcon";
import ProductCardLoader from "@/shared/ui/productCard/ProductCardLoader";
import { FavoritesCardsLengthLoader } from "@/shared/ui/FavoritesCardsLengthLoader/FavoritesCardsLengthLoader";
import { Product } from "@/shared/types/product";

import { pluralize } from "@/utils/string/pularize";

import { fetchFavoriteProducts } from "../api";

import useFavoritesStore from "../model/favorites-store";

import { FavoriteEmpty } from "./FavoriteEmpty/FavoriteEmpty";

import styles from "./styles.module.scss";

const FavoritesWidget = () => {
    const favorites = useFavoritesStore((state) => state.favorites);

    const { data, isLoading } = useQuery<Product[] | undefined>({
        queryKey: [favorites],
        queryFn: async () => {
            if (favorites.length > 0) {
                return fetchFavoriteProducts(favorites).catch(() => {
                    return undefined;
                });
            }
            return Promise.resolve(undefined);
        },
    });

    return (
        <div>
            <GoBackButton
                className={styles.link}
                href="/"
                text="Вернуться к покупкам"
            />

            <div className={styles.block__display_flex}>
                <h1 className={styles.block__favorite_section}>Избранное</h1>
                <p className={styles.block__count_items}>
                    {isLoading ? (
                        <FavoritesCardsLengthLoader />
                    ) : (
                        <>
                            {data ? (
                                <span>
                                    {pluralize(
                                        data.length,
                                        "товар",
                                        "товара",
                                        "товаров"
                                    )}
                                </span>
                            ) : (
                                <></>
                            )}
                        </>
                    )}
                </p>
            </div>

            {isLoading ? (
                <div className={styles.loader}>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <ProductCardLoader key={index} />
                    ))}
                </div>
            ) : (
                <div>
                    <div
                        className={`${
                            Array.isArray(data) && data.length > 0
                                ? styles.block__container
                                : styles.display__flex
                        }`}
                    >
                        {Array.isArray(data) ? (
                            data.length > 0 ? (
                                data.map((value) => (
                                    <div
                                        key={value._id}
                                        className={styles.block__product}
                                    >
                                        <ProductCard
                                            key={value.title}
                                            product={value}
                                        />
                                    </div>
                                ))
                            ) : (
                                <h1
                                    className={
                                        styles.block__notification_favorites
                                    }
                                >
                                    Invalid data
                                </h1>
                            )
                        ) : (
                            <>
                                <FavoriteEmpty />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FavoritesWidget;
