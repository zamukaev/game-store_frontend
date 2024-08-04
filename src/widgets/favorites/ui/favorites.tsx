"use client";

import { useQuery } from "@tanstack/react-query";

import { useEffect, useLayoutEffect, useState } from "react";

import { AppLink, CartModal, GoBackButton, ProductCard } from "@/shared/ui";
import { ArrowPrevGreyIcon } from "@/shared/icons/ArrowPrevGreyIcon/ArrowPrevGreyIcon";
import ProductCardLoader from "@/shared/ui/productCard/ProductCardLoader";
import { FavoritesCardsLengthLoader } from "@/shared/ui/FavoritesCardsLengthLoader/FavoritesCardsLengthLoader";
import { Product } from "@/shared/types/product";

import { pluralize } from "@/utils/string/pularize";

import useCartModalStore from "@/widgets/modalCartProducts/model/cartModal-store";

import { fetchFavoriteProducts } from "../api";

import useFavoritesStore from "../model/favorites-store";

import { FavoriteEmpty } from "./FavoriteEmpty/FavoriteEmpty";

import styles from "./styles.module.scss";

const FavoritesWidget = () => {
    const favorites = useFavoritesStore((state) => state.favorites);
    const { modalActive, setModalActive } = useCartModalStore();
    const [numCards, setNumCards] = useState(() => {
        const width = window.innerWidth;
        if (width < 910) return 1;
        if (width < 1500) return 2;
        if (width < 1920) return 3;
        return 4;
    });
    const [loading, setLoading] = useState(true);

    const getNumCards = (width: any) => {
        if (width < 910) return 1;
        if (width < 1500) return 2;
        if (width < 1920) return 3;
        return 4;
    };

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

    useLayoutEffect(() => {
        const width = typeof window !== "undefined" ? window.innerWidth : 0;
        setNumCards(getNumCards(width));
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const width = typeof window !== "undefined" ? window.innerWidth : 0;
            setNumCards(getNumCards(width));
        };

        setLoading(false);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

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

            {!isLoading && !loading ? (
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
            ) : (
                <div className={styles.loader}>
                    {Array.from({ length: numCards }).map((_, index) => (
                        <ProductCardLoader key={index} />
                    ))}
                </div>
            )}
            <CartModal active={modalActive} setActive={setModalActive} />
        </div>
    );
};

export default FavoritesWidget;

// пройдись линтерами именно в этой ветке
