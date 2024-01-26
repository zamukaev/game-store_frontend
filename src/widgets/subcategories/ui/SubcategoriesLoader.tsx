import { FC } from "react";

import ContentLoader from "react-content-loader";

import CategoryLoader from "@/shared/ui/subcategoryCard/SubcategoryLoader";

import styles from "./styles.module.scss";

const CategoriesLoader: FC = (props) => {
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
                {...props}
            >
                <rect x="2" y="33" rx="5" ry="5" width="300" height="16" />
            </ContentLoader>
            <ul className={styles.subcategories}>
                {Array.from({ length: 4 }).map((_, index: number) => (
                    <li key={index}>
                        <CategoryLoader />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default CategoriesLoader;
