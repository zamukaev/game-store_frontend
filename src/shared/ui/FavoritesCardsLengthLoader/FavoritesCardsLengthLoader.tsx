import React from "react";
import ContentLoader from "react-content-loader";

export const FavoritesCardsLengthLoader = () => {
    return (
        <ContentLoader
            speed={2}
            width={80}
            height={16}
            viewBox="0 0 80 16"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
            <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
            <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
            <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
            <rect x="559" y="48" rx="0" ry="0" width="563" height="48" />
            <rect x="5" y="0" rx="0" ry="0" width="189" height="50" />
            <rect x="82" y="43" rx="0" ry="0" width="156" height="55" />
            <rect x="38" y="6" rx="0" ry="0" width="25" height="34" />
        </ContentLoader>
    );
};
