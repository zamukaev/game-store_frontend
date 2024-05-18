"use client";

import { useEffect, useState } from "react";

import { AppLink, ProductCard } from "@/shared/ui";
import { ArrowPrevGreyIcon } from "@/shared/icons/ArrowPrevGreyIcon/ArrowPrevGreyIcon";
import ProductCardLoader from "@/shared/ui/productCard/ProductCardLoader";
import { FavoritesCardsLengthLoader } from "@/shared/ui/FavoritesCardsLengthLoader/FavoritesCardsLengthLoader";

import { mockDataForMapping } from "@/widgets/favorites/mock";

import styles from "./styles.module.scss";

const FavoritesWidget = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(!isLoading);
        }, 1000);
    }, []);

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
                        <>{mockDataForMapping.length} товаров</>
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
                    {mockDataForMapping.map((value) => {
                        return (
                            <div
                                key={value._id}
                                className={styles.block__product}
                            >
                                <ProductCard
                                    key={value.title}
                                    product={value}
                                />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default FavoritesWidget;
