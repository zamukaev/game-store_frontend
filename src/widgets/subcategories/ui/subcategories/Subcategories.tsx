"use client";
import { FC } from "react";

import { Category, Subcategory } from "@/shared/types/categories";
import {
    BreadCrumb,
    Headline,
    HeadlineSize,
    SubcategoriesEmpty,
    SubcategoryCard
} from "@/shared/ui";

import styles from "./styles.module.scss";

interface SubcategoriesProps {
    category?: Category;
}

const Subcategories: FC<SubcategoriesProps> = (props) => {
    const { category } = props;
    const cls = `${styles.category}`;

    return (
        <section data-testid="subcategories" className={cls}>
            <BreadCrumb
                crumb={category?.title}
            />
            <Headline data-testid="category-title" className={styles.title} Size={HeadlineSize.L}>
                {category?.title}
            </Headline>
            {
                (category?.subcategories.length !== 0) ? (
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
                ) : (
                    <SubcategoriesEmpty
                        content="Нам не удалось найти то, что вы искали"
                        data-testid="subcategories-empty" />
                )
            }
        </section>
    );
};

export default Subcategories;
