/* eslint-disable max-len */
import React from "react";

const InstagrammIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path

                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 1H5C2.79086 1 1 2.79086 1 5V11C1 13.2091 2.79086 15 5 15H11C13.2091 15 15 13.2091 15 11V5C15 2.79086 13.2091 1 11 1Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path

                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8C11 8.79565 10.6839 9.55871 10.1213 10.1213C9.55871 10.6839 8.79565 11 8 11Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect
                x="11"
                y="5"
                width="2"
                height="2"
                rx="1"
                transform="rotate(-90 11 5)"
            />
            <rect
                x="11.5"
                y="4.5"
                width="1"
                height="1"
                rx="0.5"
                transform="rotate(-90 11.5 4.5)"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default InstagrammIcon;
