import React from "react";
import ContentLoader from "react-content-loader";

const ProductCardLoader = (props: any) => (
    <ContentLoader
        speed={2}
        width={374}
        height={308}
        viewBox="0 0 374 308"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        style={{ marginLeft: "-20px" }}
        {...props}
    >
        <rect x="0" y="0" rx="15" ry="15" width="80" height="28" />
        <rect x="90" y="0" rx="15" ry="15" width="80" height="28" />
        <rect x="342" y="0" rx="26" ry="26" width="30" height="30" />
        <rect x="80" y="50" rx="15" ry="15" width="200" height="125" />
        <rect x="0" y="275" rx="0" ry="0" width="185" height="30" />
        <rect x="320" y="263" rx="25" ry="25" width="54" height="44" />
        <rect x="0" y="206" rx="0" ry="0" width="281" height="38" />
    </ContentLoader>
);

export default ProductCardLoader;
