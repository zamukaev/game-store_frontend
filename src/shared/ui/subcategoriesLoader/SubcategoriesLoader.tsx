import { FC } from "react";

import ContentLoader from "react-content-loader";

import CategoryLoader from "@/shared/ui/subcategoryCard/SubcategoryLoader";

import styles from "./styles.module.scss";
interface SubcategoriesLoaderProps {
    length?: number;
}

const SubcategoriesLoader: FC<SubcategoriesLoaderProps> = (props) => {
    const { length = 4, ...otherProps } = props;
    const cls = `${styles.category}`;

    return (
        <>
            <ContentLoader
                className={styles.title}
                speed={0}
                width={300}
                height={50}
                viewBox="0 0 300 50"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                {...otherProps}
            >
                <rect x="0" y="0" rx="5" ry="5" width="300" height="16" />
            </ContentLoader>
            <ul className={styles.subcategories}>
                {Array.from({ length: length }).map((_, index: number) => (
                    <CategoryLoader className={styles.category} key={index} />
                ))}
            </ul>
        </>
    );
};

export default SubcategoriesLoader;
