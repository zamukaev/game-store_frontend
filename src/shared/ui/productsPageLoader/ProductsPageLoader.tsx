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
                    <rect x="1" y="0" rx="5" ry="5" width="65" height="20" />
                    <rect x="0" y="40" rx="10" ry="10" width="125" height="35" />
                    <rect x="175" y="40" rx="10" ry="10" width="125" height="35" />
                    <rect x="0" y="105" rx="0" ry="0" width="266" height="4" />
                    <circle cx="8" cy="107" r="10" />
                    <circle cx="268" cy="108" r="10" />
                    <rect x="0" y="135" rx="5" ry="5" width="65" height="20" />
                    <rect x="0" y="170" rx="5" ry="5" width="60" height="20" />
                    <rect x="0" y="225" rx="5" ry="5" width="100" height="20" />
                    <rect x="248" y="135" rx="10" ry="10" width="50" height="25" />
                    <rect x="248" y="170" rx="10" ry="10" width="50" height="25" />
                    <rect x="248" y="225" rx="10" ry="10" width="50" height="25" />
                </ContentLoader>
            </div>
        </>
    );
};

export default ProductsPageLoader;