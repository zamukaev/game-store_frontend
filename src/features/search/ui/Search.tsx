"use client";

import React, { ChangeEvent, useState, useEffect } from "react";

import { useSearchParams, useRouter } from "next/navigation";

import { SearchInput } from "@/shared/ui";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const searchParams = useSearchParams();
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push(`/search?query=${searchQuery}`);
    };

    useEffect(() => {
        const query = searchParams.get("query");
        if (query) {
            setSearchQuery(query);
        }
    }, [searchParams]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <SearchInput
            handleSubmit={handleSubmit}
            placeholder="Поиск товара"
            handleInputChange={handleInputChange}
            searchQuery={searchQuery}
        />
    );
};

export default Search;
