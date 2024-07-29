import { FC } from "react";

import CategoryLoader from "@/shared/ui/loaders/subcategoryLoader/SubcategoryLoader";

import Skeleton from "../../skeleton/Skeleton";

import styles from "./styles.module.scss";

interface SubcategoriesLoaderProps {
    length?: number;
}

const SubcategoriesLoader: FC<SubcategoriesLoaderProps> = (props) => {
    const { length = 4 } = props;

    return (
        <>
            <Skeleton className={styles.title} width={200} height={20} />
            <ul className={styles.subcategories}>
                {Array.from({ length: length }).map((_, index: number) => (
                    <CategoryLoader className={styles.category} key={index} />
                ))}
            </ul>
        </>
    );
};

export default SubcategoriesLoader;
