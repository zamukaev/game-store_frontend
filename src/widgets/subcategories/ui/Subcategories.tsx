"use client";
import { FC } from "react";

import { useQuery } from "@tanstack/react-query";

import { Subcategory } from "@/shared/types/categories";
import { SubcategoryCard, Headline, HeadlineSize } from "@/shared/ui";

import { getCategoryByTitle } from "../api";

import SubcategoriesLoader from "./SubcategoriesLoader";

import styles from "./styles.module.scss";

interface SubcategoriesProps {
    params: { title: string };
}

const Subcategories: FC<SubcategoriesProps> = (props) => {
    const { params } = props;
    const cls = `${styles.category}`;

    const { data: category } = useQuery({
        queryKey: ["category"],
        queryFn: () => getCategoryByTitle(params.title),
    });

    return (
        <section className={cls}>
            {!category ? (
                <SubcategoriesLoader />
            ) : (
                <>
                    <Headline className={styles.title} Size={HeadlineSize.L}>
                        {category.title}
                    </Headline>
                    <ul className={styles.subcategories}>
                        {category.subcategories.map(
                            (cat: Subcategory, index) => (
                                <SubcategoryCard
                                    key={index}
                                    text={cat.title}
                                    alt={cat.title}
                                    image={cat.urlImg}
                                />
                            )
                        )}
                    </ul>
                </>
            )}
        </section>
    );
};

export default Subcategories;
