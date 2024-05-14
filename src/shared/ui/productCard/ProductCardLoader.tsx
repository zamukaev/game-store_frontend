import React from "react";
import ContentLoader from "react-content-loader";

import styles from "./styles.module.scss";

const ProductCardLoader = (props: any) => (
    <ContentLoader
        speed={2}
        width={334}
        height={308}
        viewBox="0 0 334 308"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="20" y="0" rx="15" ry="15" width="80" height="28" />
        <rect x="105" y="0" rx="15" ry="15" width="80" height="28" />
        <rect x="250" y="0" rx="26" ry="26" width="30" height="30" />
        <rect x="60" y="64" rx="0" ry="0" width="180" height="110" />
        <rect x="0" y="275" rx="0" ry="0" width="185" height="30" />
        <rect x="225" y="263" rx="25" ry="25" width="54" height="44" />
        <rect x="-1" y="206" rx="0" ry="0" width="281" height="38" />
    </ContentLoader>
);

export default ProductCardLoader;
