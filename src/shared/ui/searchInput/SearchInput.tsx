"use client";

import React, { ChangeEvent, FC } from "react";

import SearchIcon from "@/shared/icons/searchIcon/SearchIcon";

import styles from "./styles.module.scss";

type SearchInputProps = {
    placeholder: string;
    onSearch: (term: string) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    searchQuery: string;
};

const SearchInput: FC<SearchInputProps> = ({
    placeholder,
    onSearch,
    handleSubmit,
    handleInputChange,
    searchQuery,
}) => {
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
