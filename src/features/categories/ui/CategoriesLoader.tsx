import React from "react";
import ContentLoader from "react-content-loader";

const CategoriesLoader = (props: any) => (
    <ContentLoader
        speed={0}
        width={326}
        height={580}
        viewBox="0 0 326 580"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="37" y="88" rx="0" ry="0" width="10" height="1" />
        <rect x="113" y="29" rx="0" ry="0" width="0" height="1" />
        <rect x="193" y="147" rx="0" ry="0" width="1" height="0" />
        <rect x="255" y="247" rx="0" ry="0" width="0" height="1" />
        <rect x="2" y="0" rx="5" ry="5" width="180" height="15" />
        <rect x="2" y="100" rx="5" ry="5" width="301" height="15" />
        <rect x="2" y="140" rx="5" ry="5" width="296" height="15" />
        <rect x="2" y="179" rx="5" ry="5" width="255" height="15" />
        <rect x="2" y="220" rx="5" ry="5" width="303" height="15" />
        <rect x="2" y="260" rx="5" ry="5" width="213" height="15" />
        <rect x="2" y="460" rx="5" ry="5" width="260" height="15" />
        <rect x="2" y="300" rx="5" ry="5" width="309" height="15" />
        <rect x="2" y="340" rx="5" ry="5" width="213" height="15" />
        <rect x="3" y="380" rx="5" ry="5" width="264" height="15" />
        <rect x="2" y="420" rx="5" ry="5" width="309" height="15" />
        <rect x="2" y="50" rx="5" ry="5" width="221" height="15" />
        <rect x="2" y="500" rx="5" ry="5" width="260" height="15" />
        <rect x="2" y="540" rx="5" ry="5" width="309" height="15" />
    </ContentLoader>
);

export default CategoriesLoader;
