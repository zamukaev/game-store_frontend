import React from "react";
import ContentLoader from "react-content-loader";

const SubcategoryLoader = (props: any) => (
    <ContentLoader
        speed={0}
        width={203}
        height={203}
        viewBox="0 0 203 203"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="8" y="0" rx="5" ry="5" width="130" height="130" />
        <rect x="0" y="146" rx="5" ry="5" width="147" height="14" />
    </ContentLoader>
);

export default SubcategoryLoader;
