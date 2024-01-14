/* eslint-disable max-len */
import React from "react";

const EditIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            {...props}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.7654 4.16231L18.7104 5.74531C18.8982 5.9283 19.0034 6.17982 19.0019 6.44201C19.0004 6.70421 18.8923 6.9545 18.7024 7.13531L17.2244 8.93531L12.1944 15.0723C12.1073 15.1749 11.9901 15.2473 11.8594 15.2793L9.25138 15.8793C8.90533 15.8936 8.60691 15.6384 8.56738 15.2943L8.68938 12.7213C8.69842 12.5899 8.75043 12.4652 8.83738 12.3663L13.6504 6.50131L15.3454 4.43331C15.6747 3.98505 16.2941 3.86684 16.7654 4.16231Z"
                stroke="#737373"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M5 18.2415C4.58579 18.2415 4.25 18.5773 4.25 18.9915C4.25 19.4057 4.58579 19.7415 5 19.7415V18.2415ZM18.7 19.7415C19.1142 19.7415 19.45 19.4057 19.45 18.9915C19.45 18.5773 19.1142 18.2415 18.7 18.2415V19.7415ZM14.3455 6.22075C14.1904 5.83664 13.7534 5.65094 13.3693 5.80598C12.9852 5.96102 12.7995 6.39808 12.9545 6.78218L14.3455 6.22075ZM17.3893 9.67003C17.7933 9.57876 18.0468 9.17723 17.9556 8.7732C17.8643 8.36917 17.4628 8.11563 17.0587 8.2069L17.3893 9.67003ZM5 19.7415H18.7V18.2415H5V19.7415ZM12.9545 6.78218C13.1872 7.35855 13.665 8.18024 14.3765 8.81292C15.1011 9.4573 16.133 9.95383 17.3893 9.67003L17.0587 8.2069C16.416 8.3521 15.8609 8.12563 15.3733 7.69201C14.8725 7.24669 14.5128 6.63538 14.3455 6.22075L12.9545 6.78218Z"
                fill="#737373"
            />
        </svg>
    );
};

export default EditIcon;