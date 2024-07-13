/* eslint-disable max-len */
import React from "react";

const BurgerMenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fill-rule="evenodd"
                clipRule="evenodd"
                d="M2.375 10C2.375 9.65482 2.65482 9.375 3 9.375H18C18.3452 9.375 18.625 9.65482 18.625 10C18.625 10.3452 18.3452 10.625 18 10.625H3C2.65482 10.625 2.375 10.3452 2.375 10Z"
                fill="#111111"
            />
            <path
                fill-rule="evenodd"
                clipRule="evenodd"
                d="M2.375 5C2.375 4.65482 2.65482 4.375 3 4.375H18C18.3452 4.375 18.625 4.65482 18.625 5C18.625 5.34518 18.3452 5.625 18 5.625H3C2.65482 5.625 2.375 5.34518 2.375 5Z"
                fill="#111111"
            />
            <path
                fill-rule="evenodd"
                clipRule="evenodd"
                d="M2.375 15C2.375 14.6548 2.65482 14.375 3 14.375H18C18.3452 14.375 18.625 14.6548 18.625 15C18.625 15.3452 18.3452 15.625 18 15.625H3C2.65482 15.625 2.375 15.3452 2.375 15Z"
                fill="#111111"
            />
        </svg>
    );
};

export default BurgerMenuIcon;
