import React from "react";
import ContentLoader from "react-content-loader";

const ProductLoader = () => {
    return (
        <ContentLoader
            speed={2}
            width={1200}
            height={700}
            viewBox="0 0 1200 700"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="10" ry="10" width="38" height="38" />
            <rect x="64" y="3" rx="5" ry="5" width="500" height="30" />
            <rect x="581" y="2" rx="25" ry="25" width="30" height="30" />
            <rect x="65" y="100" rx="5" ry="5" width="450" height="250" />
            <rect x="0" y="430" rx="5" ry="5" width="120" height="80" />
            <rect x="140" y="430" rx="5" ry="5" width="120" height="80" />
            <rect x="280" y="430" rx="5" ry="5" width="120" height="80" />
            <rect x="420" y="430" rx="5" ry="5" width="120" height="80" />
            <rect x="0" y="560" rx="5" ry="5" width="140" height="25" />
            <rect x="0" y="610" rx="5" ry="5" width="1200" height="300" />
            <rect x="750" y="100" rx="5" ry="5" width="320" height="30" />
            <rect x="750" y="160" rx="5" ry="5" width="150" height="30" />
            <rect x="750" y="200" rx="5" ry="5" width="220" height="20" />
            <rect x="750" y="250" rx="22" ry="22" width="362" height="50" />
        </ContentLoader>
    );
};

export default ProductLoader;
