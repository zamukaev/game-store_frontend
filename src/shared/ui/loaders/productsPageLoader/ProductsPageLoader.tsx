import ProductCardLoader from "@/shared/ui/loaders/productCardLoader/ProductCardLoader";

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
                height={10}
                border="3px"
            />
            <div className={styles.filters__container}>
                <Skeleton
                    className={styles.filterIcon}
                    width={24}
                    height={24}
                    border="3px"
                />
                <Skeleton
                    className={styles.filters}
                    width={61}
                    height={18}
                    border="3px"
                />
            </div>

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
