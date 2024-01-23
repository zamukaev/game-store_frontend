"use client";
import { FC } from "react";

import { useQuery } from "@tanstack/react-query";

import { Headline, HTag, HeadlineSize, AppLink } from "@/shared/ui";
import { Categories } from "@/shared/types/categories";

import { getCategories } from "../api";

import CategoriesLoader from "./CategoriesLoader";

import styles from "./styles.module.scss";

interface CategoriesProps {
    className?: string;
}

const Categories: FC<CategoriesProps> = (props) => {
    const {
        className = "",
    } = props;

    const cls = `${styles.categories} ${className}`;

    const {
        data:categories,
        isLoading:isCategoriesLoading
    }=useQuery({queryKey:["categories"], queryFn:getCategories });
   
    if(isCategoriesLoading){
        return <CategoriesLoader/>;
    }

    return (
        <div className={cls}>
            <Headline className={styles.title} H={HTag.H2} size={HeadlineSize.M}>Категории</Headline>
            <ul className={styles.row}>
                {categories!.map((cat:Categories) => (
                    <li key={cat._id} className={styles.item}>
                        <AppLink className={styles.link} href={`/category/${cat.originTitle}`}>{cat.title}</AppLink>
                    </li>
                ))}
            </ul>
        </div >
    );
};

export default Categories;