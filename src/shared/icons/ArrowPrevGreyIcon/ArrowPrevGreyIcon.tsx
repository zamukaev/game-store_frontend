import React from "react";

export const ArrowPrevGreyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
    props
) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M15 7L10 12L15 17"
                stroke="#5D5D5D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
