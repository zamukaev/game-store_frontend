"use client";

import React from "react";

import { useRouter } from "next/navigation";

import { SearchInput } from "@/shared/ui";

const Search = () => {
    const router = useRouter();

    const handleSearch = (query: string) => {
        router.push(`/search?query=${query}`);
    };

    return <SearchInput placeholder="Поиск товара" onSearch={handleSearch} />;
};

export default Search;
