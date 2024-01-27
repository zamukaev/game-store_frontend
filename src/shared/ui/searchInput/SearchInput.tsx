"use client";

import React, { ChangeEvent, FC, FormEvent, useState } from "react";

import SearchIcon from "@/shared/icons/searchIcon/SearchIcon";

import styles from "./styles.module.scss";

interface SearchInputProps {
    onSearch: (query: string) => void;
    placeholder: string;
}

const SearchInput: FC<SearchInputProps> = ({ onSearch, placeholder }) => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={styles.form}
            data-testid="searchInput"
        >
            <input
                type="text"
                placeholder={placeholder}
                value={searchQuery}
                onChange={handleInputChange}
                className={styles.input}
            />
            <button type="submit" className={styles.iconButton}>
                <SearchIcon fill="#989898" className={styles.icon} />
            </button>
        </form>
    );
};

export default SearchInput;
