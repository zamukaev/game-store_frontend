/* eslint-disable max-len */
import React from "react";

const AddressIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width="24"
            height="26"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.3336 3.21093C16.8761 4.68053 17.749 6.71796 17.749 8.84843C17.749 10.9789 16.8761 13.0163 15.3336 14.4859L9.49952 20.1234L3.66539 14.4859C2.12294 13.0163 1.25 10.9789 1.25 8.84843C1.25 6.71796 2.12294 4.68053 3.66539 3.21093C6.93129 0.0963563 12.0677 0.0963563 15.3336 3.21093Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.7997 8.35908C12.7878 9.22229 12.4333 10.0454 11.8145 10.6473C11.1956 11.2491 10.3629 11.5805 9.49971 11.5683C8.6365 11.5805 7.80385 11.2491 7.18496 10.6473C6.56607 10.0454 6.21166 9.22229 6.19971 8.35908C6.22535 6.56207 7.70269 5.12597 9.49971 5.15121C11.2967 5.12597 12.7741 6.56207 12.7997 8.35908V8.35908Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default AddressIcon;
