"use client";
import { FC } from "react";

import { useQuery } from "@tanstack/react-query";

import { Headline, HeadlineSize, AppLink } from "@/shared/ui";
import { Categories } from "@/shared/types/categories";

import { getCategories } from "../api";

import CategoriesLoader from "./CategoriesLoader";

import styles from "./styles.module.scss";

const Categories: FC = () => {
    const cls = `${styles.categories}`;

    const { data: categories } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
    });

    return (
        <div className={cls}>
            <Headline className={styles.title} Size={HeadlineSize.M}>
                Категории
            </Headline>
            <ul className={styles.row}>
                {!categories ? (
                    <CategoriesLoader />
                ) : (
                    categories.map((cat: Categories) => (
                        <li key={cat._id} className={styles.item}>
                            <AppLink
                                className={styles.link}
                                href={`/category/${cat.originTitle}`}
                            >
                                {cat.title}
                            </AppLink>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Categories;