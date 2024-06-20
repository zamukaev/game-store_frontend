"use client";

import React, { ChangeEvent, useState, useEffect, useRef } from "react";

import { useSearchParams, useRouter } from "next/navigation";

import { SearchInput } from "@/shared/ui";

const Search = () => {
    const searchUrlRef = useRef<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        if (searchUrlRef.current) {
            window.location.href = searchUrlRef.current;
        }
    }, [searchUrlRef.current]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newSearchUrl = `/search?query=${searchQuery}`;

        if (window.location.href.includes(newSearchUrl)) {
            window.location.reload();
        } else {
            searchUrlRef.current = newSearchUrl;
            router.push(newSearchUrl);
        }
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
