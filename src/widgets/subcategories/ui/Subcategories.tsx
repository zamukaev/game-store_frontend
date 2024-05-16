"use client";
import { FC } from "react";

import { useQuery } from "@tanstack/react-query";

import { Subcategory } from "@/shared/types/categories";

import {
    BreadCrumb,
    Headline,
    HeadlineSize,
    SubcategoriesEmpty,
    SubcategoriesLoader,
    SubcategoryCard,
} from "@/shared/ui";

import { getCategoryByTitle } from "../api/getCategoryByTitle";

import styles from "./styles.module.scss";

interface SubcategoriesProps {
    title: string;
}

const Subcategories: FC<SubcategoriesProps> = ({ title }) => {
    const cls = `${styles.category}`;

    const { data: category, isLoading } = useQuery({
        queryKey: ["category"],
        queryFn: () => getCategoryByTitle(title),
    });

    return (
        <section className={styles.category}>
            <BreadCrumb data-testid="breadcrumbs" crumb={category?.title} />

            {isLoading ? (
                <SubcategoriesLoader data-testid="subcategories-loader" />
            ) : category?.subcategories.length !== 0 ? (
                <>
                    <Headline
                        data-testid="category-title"
                        className={styles.title}
                        Size={HeadlineSize.L}
                    >
                        {category?.title}
                    </Headline>
                    <ul className={styles.subcategories} role="list">
                        {category?.subcategories.map((cat: Subcategory) => (
                            <li data-testid="category-list" key={cat._id}>
                                <SubcategoryCard
                                    title={cat.originTitle}
                                    text={cat.title}
                                    alt={cat.title}
                                    image={cat.urlImg}
                                />
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <SubcategoriesEmpty
                    content="Нам не удалось найти то, что вы искали"
                    data-testid="subcategories-empty"
                />
            )}
        </section>
    );
};

export default Subcategories;
