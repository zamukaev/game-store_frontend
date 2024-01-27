import { FC } from "react";

import { Category, Subcategory } from "@/shared/types/categories";
import { Headline, HeadlineSize, SubcategoryCard } from "@/shared/ui";

import SubcategoriesEmpty from "./SubcategoriesEmpty";

import styles from "./styles.module.scss";

interface SubcategoriesProps {
    title: string;
    category?: Category;
}

const Subcategories: FC<SubcategoriesProps> = (props) => {
    const { title, category } = props;
    const cls = `${styles.category}`;

    return (
        <section className={cls}>
            <Headline className={styles.title} Size={HeadlineSize.L}>
                {title}
            </Headline>
            <ul className={styles.subcategories}>
                {category ? (
                    category.subcategories.map((cat: Subcategory) => (
                        <SubcategoryCard
                            key={cat.id}
                            text={cat.title}
                            alt={cat.title}
                            image={cat.urlImg}
                        />
                    ))
                ) : (
                    <SubcategoriesEmpty />
                )}
            </ul>
        </section>
    );
};

export default Subcategories;
