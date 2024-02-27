import ContentLoader from "react-content-loader";

import ProductCardLoader from "@/shared/ui/productCard/ProductCardLoader";

import styles from "./styles.module.scss";

const ProductsPageLoader = (props: any) => {
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
                <rect x="0" y="0" rx="5" ry="5" width="300" height="16" />
            </ContentLoader>
            <ContentLoader
                className={styles.sorting}
                speed={0}
                width={300}
                height={40}
                viewBox="0 0 400 50"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                {...props}
            >
                <rect x="0" y="0" rx="5" ry="5" width="300" height="16" />
            </ContentLoader>
            <div className={styles.container}>
                <ul className={styles.products}>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <li className={styles.product} key={index}>
                            <ProductCardLoader />
                        </li>
                    ))}
                </ul>
                <ContentLoader
                    speed={0}
                    width={300}
                    height={251}
                    viewBox="0 0 300 251"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    {...props}
                >
                    <rect x="1" y="0" rx="5" ry="5" width="65" height="30" />
                    <rect x="0" y="57" rx="10" ry="10" width="125" height="25" />
                    <rect x="153" y="56" rx="10" ry="10" width="125" height="25" />
                    <rect x="0" y="105" rx="0" ry="0" width="266" height="4" />
                    <circle cx="8" cy="107" r="8" />
                    <circle cx="268" cy="108" r="9" />
                    <rect x="0" y="135" rx="5" ry="5" width="65" height="15" />
                    <rect x="0" y="166" rx="5" ry="5" width="60" height="15" />
                    <rect x="0" y="209" rx="5" ry="5" width="70" height="15" />
                    <rect x="230" y="134" rx="10" ry="10" width="43" height="22" />
                    <rect x="230" y="166" rx="10" ry="10" width="43" height="22" />
                    <rect x="230" y="209" rx="10" ry="10" width="43" height="22" />
                </ContentLoader>
            </div>
        </>
    );
};

export default ProductsPageLoader;