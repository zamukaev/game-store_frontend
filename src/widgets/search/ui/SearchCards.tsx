"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { ProductCard } from "@/shared/ui";

import ProductCardLoader from "@/shared/ui/productCard/ProductCardLoader";

import styles from "./styles.module.scss";
import SearchEmpty from "./SearchEmpty/SearchEmpty";

const fetchSearchResult = async (title: string) => {
    const { data } = await axios.get(
        `https://gamestore-backend.vercel.app/api/search/${title}`
    );
    return data;
};

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
        <div className={styles.product} data-testid="productCard">
            <div className={styles.product__container}>
                {data.map((item: any) => (
                    <ProductCard key={item._id} product={item} />
                ))}
            </div>
        </div>
    );
};

export default SearchCards;
