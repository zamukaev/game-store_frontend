import { FC } from "react";

import { Category, Subcategory } from "@/shared/types/categories";
import { Headline, HeadlineSize, SubcategoryCard } from "@/shared/ui";

import SubcategoriesEmpty from "./SubcategoriesEmpty";

import styles from "./styles.module.scss";

interface SubcategoriesProps {
    category?: Category;
}

const Subcategories: FC<SubcategoriesProps> = (props) => {
    const { category } = props;
    const cls = `${styles.category}`;

    return (
        <section className={cls}>
            <Headline className={styles.title} Size={HeadlineSize.L}>
                {category?.title}
            </Headline>
            {
                (category?.subcategories.length !== 0) ? (
                    <ul className={styles.subcategories}>

                        {category?.subcategories.map((cat: Subcategory) => (
                            <SubcategoryCard
                                data-testid="subcategory-card"
                                key={cat._id}
                                text={cat.title}
                                alt={cat.title}
                                image={cat.urlImg}
                            />
                        ))}

                    </ul>
                ) : (
                    <SubcategoriesEmpty />
                )
            }
        </section>
    );
};

export default Subcategories;
