/* eslint-disable max-len */
import React from "react";

const AddressIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.3336 9.21093C23.8761 10.6805 24.749 12.718 24.749 14.8484C24.749 16.9789 23.8761 19.0163 22.3336 20.4859L16.4995 26.1234L10.6654 20.4859C9.12294 19.0163 8.25 16.9789 8.25 14.8484C8.25 12.718 9.12294 10.6805 10.6654 9.21093C13.9313 6.09636 19.0677 6.09636 22.3336 9.21093Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.7992 14.3586C19.7873 15.2218 19.4329 16.0449 18.814 16.6468C18.1951 17.2486 17.3624 17.58 16.4992 17.5678C15.636 17.58 14.8034 17.2486 14.1845 16.6468C13.5656 16.0449 13.2112 15.2218 13.1992 14.3586C13.2249 12.5616 14.7022 11.1255 16.4992 11.1507C18.2962 11.1255 19.7736 12.5616 19.7992 14.3586V14.3586Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default AddressIcon;
