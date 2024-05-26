"use client";

import { useQuery } from "@tanstack/react-query";

import { AppLink, ProductCard } from "@/shared/ui";
import { ArrowPrevGreyIcon } from "@/shared/icons/ArrowPrevGreyIcon/ArrowPrevGreyIcon";
import ProductCardLoader from "@/shared/ui/productCard/ProductCardLoader";
import { FavoritesCardsLengthLoader } from "@/shared/ui/FavoritesCardsLengthLoader/FavoritesCardsLengthLoader";
import FavoritesIcon from "@/shared/icons/favoritesIcon/Favorites";

import { Product } from "@/shared/types/product";

import { fetchFavoriteProducts } from "../api";

import useFavoritesStore from "../model/favorites-store";

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
            <AppLink className={styles.link} href="/">
                <div className={styles.block__return_back_button}>
                    <ArrowPrevGreyIcon />
                    <p className={styles.block__return_back}>
                        Вернуться к покупкам
                    </p>
                </div>
            </AppLink>

            <div className={styles.block__display_flex}>
                <h1 className={styles.block__favorite_section}>Избранное</h1>
                <p className={styles.block__count_items}>
                    {isLoading ? (
                        <FavoritesCardsLengthLoader />
                    ) : (
                        <>
                            {data ? (
                                <span>{data.length} товаров</span>
                            ) : (
                                <span>Нет товаров в избранном</span>
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
                <div className={styles.block__container}>
                    <div className={styles.block__container}>
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
                            <div className={styles.block__no_goods}>
                                <FavoritesIcon
                                    fill={"var(--color-orange)"}
                                    width={28}
                                    height={28}
                                />
                                <h1>Вы пока не добавляли товары в избранное</h1>
                                <button>
                                    <AppLink
                                        href="/"
                                        className={
                                            styles.block__return_back_link
                                        }
                                    >
                                        Перейти на главную
                                    </AppLink>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FavoritesWidget;
