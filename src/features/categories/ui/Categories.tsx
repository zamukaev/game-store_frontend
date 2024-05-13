"use client";
import { FC, useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { Headline, HeadlineSize, AppLink } from "@/shared/ui";
import { Category } from "@/shared/types/categories";

import { getCategories } from "../api/getCategories";

import CategoriesLoader from "./CategoriesLoader";

import styles from "./styles.module.scss";

const Categories: FC = () => {
    const cls = `${styles.categories}`;
    const [cat, setCat] = useState<Category[] | undefined>([]);

    const { data: categories } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
    });

    useEffect(() => {
        setCat(categories);
    }, [categories]);

    return (
        <div className={cls}>
            <Headline className={styles.title} Size={HeadlineSize.L}>
                Категории
            </Headline>
            <ul className={styles.row}>
                {!cat ? (
                    <CategoriesLoader data-testid="categories-loader" />
                ) :
                    <>
                        <li className={styles.item}>
                            <AppLink
                                className={styles.link}
                                href="/catalog/"
                            >
                                Все категории
                            </AppLink>
                        </li>
                        {cat.map((cat: Category) => (
                            <li key={cat._id} className={styles.item}>
                                <AppLink
                                    className={styles.link}
                                    href={`/catalog/${cat.originTitle}`}
                                >
                                    {cat.title}
                                </AppLink>
                            </li>
                        ))}
                    </>
                }
            </ul>
        </div>
    );
};

export default Categories;
