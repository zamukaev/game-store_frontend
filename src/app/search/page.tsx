"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSearchResult = async (title: string) => {
    const { data } = await axios.get(
        `https://gamestore-backend.vercel.app/api/search/${title}`
    );
    return data;
};

const SearchResults = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get("query");

    const { data, isLoading, error } = useQuery({
        queryKey: ["getProductsSearch"],
        queryFn: () => return fetchSearchResult(query as string),
    });

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка</div>;
    }

    if (!data || data.length === 0) {
        return <h1>Ничего не найдено</h1>;
    }

    return (
        <div>
            <h1>Результаты поиска для {query}</h1>
            <ul>
                {data.map((item: any) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResults;
