"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { GoBackButton, Headline, ProductCard } from "@/shared/ui";
import ProductCardLoader from "@/shared/ui/productCard/ProductCardLoader";
import SearchEmpty from "@/widgets/search/ui/SearchEmpty/SearchEmpty";

import { fetchSearchResult } from "../api";

import styles from "./styles.module.scss";

const SearchCards = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get("query");

    const [numCards, setNumCards] = useState(() => {
        const width = typeof window !== "undefined" ? window.innerWidth : 0;
        if (width < 768) return 1;
        if (width < 1024) return 2;
        if (width < 1650) return 3;
        return 4;
    });

    const { data, isLoading, error } = useQuery({
        queryKey: ["searchResults"],
        queryFn: () => fetchSearchResult(query as string),
        enabled: !!query,
    });

    useEffect(() => {
        const handleResize = () => {
            const width = typeof window !== "undefined" ? window.innerWidth : 0;
            if (width < 768) {
                setNumCards(1);
            } else if (width < 1024) {
                setNumCards(2);
            } else if (width < 1650) {
                setNumCards(3);
            } else {
                setNumCards(4);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (isLoading) {
        return (
            <>
                <GoBackButton
                    className={styles.link}
                    href="/"
                    text="Вернуться к покупкам"
                />
                <Headline className={styles.query_title}>{query}</Headline>
                <div className={styles.loader}>
                    {Array.from({ length: numCards }).map((_, index) => (
                        <ProductCardLoader key={index} />
                    ))}
                </div>
            </>
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
                <GoBackButton
                    className={styles.link}
                    href="/"
                    text="Вернуться к покупкам"
                />
                <Headline className={styles.query_title}>{query}</Headline>
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
