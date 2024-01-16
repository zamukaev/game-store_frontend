/* eslint-disable max-len */
import React from "react";

const SmallStarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.21693 4.26393L7.5 1L5.78307 4.26393C5.66178 4.50244 5.48622 4.70917 5.2705 4.8675C5.05373 5.02664 4.8029 5.13314 4.53786 5.17857L1 5.87221L3.47 8.826C3.80779 9.19621 3.96718 9.6954 3.90643 10.1929L3.43657 14L6.694 12.4214C6.94529 12.2997 7.22079 12.2362 7.5 12.2357C7.76197 12.2365 8.01991 12.3002 8.25214 12.4214L11.5857 13.9025L11.1159 10.1409C11.0565 9.6445 11.2161 9.14687 11.5532 8.77771L14 5.87221L10.4621 5.17857C10.1968 5.13328 9.94561 5.02677 9.72857 4.8675C9.51319 4.70906 9.33796 4.50234 9.21693 4.26393Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default SmallStarIcon;
