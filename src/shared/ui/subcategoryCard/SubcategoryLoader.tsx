import React from "react";
import ContentLoader from "react-content-loader";

const SubcategoryLoader = (props: any) => (
    <ContentLoader
        speed={0}
        width={180}
        height={190}
        viewBox="0 0 180 211"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="13" y="0" rx="5" ry="5" width="150" height="150" />
        <rect x="0" y="180" rx="5" ry="5" width="190" height="20" />
    </ContentLoader>
);

export default SubcategoryLoader;
