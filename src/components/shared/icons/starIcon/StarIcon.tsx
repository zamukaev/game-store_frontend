/* eslint-disable max-len */
import React from "react";

const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.7483 6.85833L12.6667 1L9.585 6.85833C9.3673 7.28644 9.05219 7.65749 8.665 7.94167C8.27593 8.2273 7.82572 8.41845 7.35 8.5L1 9.745L5.43333 15.0467C6.03962 15.7111 6.32571 16.6071 6.21667 17.5L5.37333 24.3333L11.22 21.5C11.671 21.2816 12.1655 21.1676 12.6667 21.1667C13.1369 21.1681 13.5998 21.2824 14.0167 21.5L20 24.1583L19.1567 17.4067C19.0501 16.5158 19.3367 15.6226 19.9417 14.96L24.3333 9.745L17.9833 8.5C17.507 8.4187 17.0562 8.22753 16.6667 7.94167C16.2801 7.6573 15.9656 7.28626 15.7483 6.85833Z"
                stroke="#FF6B00"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default StarIcon;
