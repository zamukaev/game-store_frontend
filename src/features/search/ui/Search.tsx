"use client";

import React from "react";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { SearchInput } from "@/shared/ui";

const Search = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = (term: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("query", term || "");
        replace(`${pathname}?${params.toString()}`);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch(event.currentTarget.value);
        }
    };

    return (
        <SearchInput
            placeholder="Поиск товара"
            onSearch={handleSearch}
            handleKeyPress={handleKeyPress}
        />
    );
};

export default Search;
