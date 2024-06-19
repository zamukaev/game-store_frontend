import React from "react";

const AviableIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 8.00009C1.00022 4.93888 3.16282 2.30411 6.16526 1.7071C9.16769 1.11008 12.1737 2.7171 13.345 5.54537C14.5163 8.37363 13.5267 11.6354 10.9813 13.336C8.43587 15.0366 5.04366 14.7023 2.87917 12.5376C1.67584 11.3341 0.999877 9.70194 1 8.00009Z"
                stroke="#0EAC1D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.20837 8.00016L6.34696 10.1387L10.625 5.86157"
                stroke="#0EAC1D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default AviableIcon;
