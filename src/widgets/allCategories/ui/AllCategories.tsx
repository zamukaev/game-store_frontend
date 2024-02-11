"use client";
import { FC } from "react";

import { useQuery } from "@tanstack/react-query";

import { getCategories } from "@/features/categories";
import { Headline, HeadlineSize, SubcategoriesLoader, SubcategoryCard } from "@/shared/ui";

import styles from "./styles.module.scss";

const AllCategories = () => {

    const {
        data: categories,
        isLoading
    } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
    });

    return (
        isLoading
            ? <SubcategoriesLoader />
            : <section className={styles.content} >
                <Headline className={styles.title} Size={HeadlineSize.L} >
                    Все категории
                </Headline>
                <ul className={styles.categories}>
                    {categories?.map((category) => (
                        <li key={category._id} className={styles.category}>
                            <SubcategoryCard
                                image={category.urlImg}
                                text={category.title}
                                title={category.originTitle}
                                alt={category.title}
                            />
                        </li>
                    ))}
                </ul>
            </section>
    );
};

export default AllCategories;