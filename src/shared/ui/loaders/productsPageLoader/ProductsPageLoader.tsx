import ProductCardLoader from "@/shared/ui/productCard/ProductCardLoader";

import Skeleton from "../../skeleton/Skeleton";

import FilterLoader from "../../filtersLoader/FilterLoader";

import styles from "./styles.module.scss";

const ProductsPageLoader = (props: any) => {
    return (
        <>
            <Skeleton
                className={styles.title}
                width={165}
                height={20}
                border="3px"
            />
            <Skeleton
                className={styles.sorting}
                width={165}
                height={20}
                border="3px"
            />

            <div className={styles.container}>
                <ul className={styles.products}>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <li className={styles.product} key={index}>
                            <ProductCardLoader />
                        </li>
                    ))}
                </ul>
                <FilterLoader />
            </div>
        </>
    );
};

export default ProductsPageLoader;
