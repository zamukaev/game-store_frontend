/* eslint-disable max-len */
import React from "react";

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width="16"
            height="11"
            viewBox="0 0 16 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M1 5.5L5.667 10L15 1"
                stroke="#FF6B00"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default CheckIcon;
