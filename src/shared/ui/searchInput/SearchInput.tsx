"use client";

import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import SearchIcon from "@/shared/icons/searchIcon/SearchIcon";

import styles from "./styles.module.scss";

type SearchInputProps = {
    placeholder: string;
    onSearch: (term: string) => void;
    handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const SearchInput: FC<SearchInputProps> = ({ placeholder }) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const router = useRouter();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push(`/search/${searchQuery}`);
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
            <button
                type="submit"
                className={styles.iconButton}
                onClick={() => router.push(`/${searchQuery}`)}
            >
                <SearchIcon fill="#989898" className={styles.icon} />
            </button>
        </form>
    );
};

export default SearchInput;
