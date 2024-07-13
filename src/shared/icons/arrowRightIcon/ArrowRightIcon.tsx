/* eslint-disable max-len */
import React from "react";

const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.183065 11.7621C-0.0609843 11.5188 -0.0609376 11.1244 0.183169 10.8811L4.74178 6.33836L0.184245 1.79452C-0.0598041 1.55121 -0.0597574 1.15676 0.18435 0.913505C0.428457 0.670247 0.824186 0.670293 1.06824 0.913609L6.06766 5.898C6.31171 6.14132 6.31166 6.53576 6.06755 6.77902L1.06695 11.7622C0.822844 12.0055 0.427115 12.0054 0.183065 11.7621Z"
                fill="#111111"
            />
        </svg>
    );
};

export default ArrowRightIcon;
