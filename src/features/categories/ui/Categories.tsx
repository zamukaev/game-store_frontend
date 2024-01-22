import { FC, useEffect } from "react";

import { Headline, HTag, HeadlineSize } from "@/shared/ui";

import { useCategoriesStore } from "../model/store";

import styles from "./styles.module.scss";

interface CategoriesProps {
    className?: string;
}

const Categories: FC<CategoriesProps> = (props) => {
    const {
        className = "",
    } = props;
    const cls = `${styles.categories} ${className}`;

    const { categories, getCategories } = useCategoriesStore();

    useEffect(() => {
        getCategories();
    }, [getCategories]);

   
    return (
        <div className={cls}>
            <Headline className={styles.title} H={HTag.H2} size={HeadlineSize.M}>Категории</Headline>
            <ul className={styles.row}>
                {categories.map((cat: any, i: number) => (
                    <li key={cat.id} className={styles.item}>{cat.title}</li>
                ))}
            </ul>
        </div >
    );
};

export default Categories;