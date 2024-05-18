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
                    width={320}
                    height={290}
                    viewBox="0 10 320 290"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    {...props}
                >
                    <rect x="5" y="0" rx="5" ry="5" width="65" height="20" />
                    <rect
                        x="0"
                        y="40"
                        rx="10"
                        ry="10"
                        width="130"
                        height="40"
                    />
                    <rect
                        x="185"
                        y="40"
                        rx="10"
                        ry="10"
                        width="130"
                        height="40"
                    />
                    <rect x="0" y="115" rx="0" ry="0" width="320" height="4" />
                    <circle cx="10" cy="116" r="11" />
                    <circle cx="310" cy="116" r="11" />
                    <rect x="0" y="145" rx="5" ry="5" width="65" height="25" />
                    <rect x="0" y="185" rx="5" ry="5" width="65" height="25" />
                    <rect x="0" y="240" rx="5" ry="5" width="85" height="25" />
                    <rect
                        x="265"
                        y="145"
                        rx="10"
                        ry="10"
                        width="55"
                        height="25"
                    />
                    <rect
                        x="265"
                        y="185"
                        rx="10"
                        ry="10"
                        width="55"
                        height="25"
                    />
                    <rect
                        x="265"
                        y="240"
                        rx="10"
                        ry="10"
                        width="55"
                        height="25"
                    />
                </ContentLoader>
            </div>
        </>
    );
};

export default ProductsPageLoader;
