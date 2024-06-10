"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

import { useQuery } from "@tanstack/react-query";

import { AppLink, ProductCard } from "@/shared/ui";
import ProductCardLoader from "@/shared/ui/productCard/ProductCardLoader";

import SearchEmpty from "@/widgets/search/ui/SearchEmpty/SearchEmpty";

import { ArrowPrevGreyIcon } from "@/shared/icons/ArrowPrevGreyIcon/ArrowPrevGreyIcon";

import { fetchSearchResult } from "../api";

import styles from "./styles.module.scss";

const SearchCards = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get("query");

    const { data, isLoading, error } = useQuery({
        queryKey: ["searchResults"],
        queryFn: () => fetchSearchResult(query as string),
        enabled: !!query,
    });

    if (isLoading) {
        return (
            <div className={styles.loader}>
                {Array.from({ length: 4 }).map((_, index) => (
                    <ProductCardLoader key={index} />
                ))}
            </div>
        );
    }

    if (error) {
        return <div>Ошибка</div>;
    }

    if (!data || data.length === 0) {
        return <SearchEmpty />;
    }

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

            <div className={styles.product} data-testid="productCard">
                <div className={styles.product__container}>
                    {data.map((item: any) => (
                        <ProductCard key={item._id} product={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchCards;
