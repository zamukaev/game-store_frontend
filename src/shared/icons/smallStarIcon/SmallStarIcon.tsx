/* eslint-disable max-len */
import React from "react";

const SmallStarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.6414 6.02143L11 1L8.35857 6.02143C8.17197 6.38837 7.90187 6.70642 7.57 6.95C7.23651 7.19483 6.85062 7.35867 6.44286 7.42857L1 8.49571L4.8 13.04C5.31968 13.6095 5.56489 14.3775 5.47143 15.1429L4.74857 21L9.76 18.5714C10.1466 18.3842 10.5704 18.2865 11 18.2857C11.403 18.2869 11.7999 18.3849 12.1571 18.5714L17.2857 20.85L16.5629 15.0629C16.4715 14.2992 16.7171 13.5337 17.2357 12.9657L21 8.49571L15.5571 7.42857C15.1489 7.35889 14.7625 7.19503 14.4286 6.95C14.0972 6.70625 13.8276 6.38822 13.6414 6.02143Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default SmallStarIcon;
