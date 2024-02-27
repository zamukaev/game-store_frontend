"use client";
import { useQuery } from "@tanstack/react-query";

import { getCategories } from "@/features/categories";
import {
    BreadCrumb,
    Headline,
    HeadlineSize,
    SubcategoriesLoader,
    SubcategoryCard
} from "@/shared/ui";

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
        <section className={styles.content} >
            <BreadCrumb className={styles.breadcrumbItem} />

            {isLoading
                ? <SubcategoriesLoader length={12} />
                :
                <>
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
                </>
            }
        </section>
    );
};

export default AllCategories;