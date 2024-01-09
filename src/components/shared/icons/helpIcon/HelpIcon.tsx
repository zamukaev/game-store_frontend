/* eslint-disable max-len */
import React from "react";

const HelpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg {...props} width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5 13V11C5 7.68629 7.68629 5 11 5H13C16.3137 5 19 7.68629 19 11V13C19 16.3137 16.3137 19 13 19H11C7.68629 19 5 16.3137 5 13Z" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 9.63908C10 8.54908 10.9 7.94908 12.247 8.00008C13.2191 8.03379 13.992 8.82743 14 9.80008C14.047 10.7096 13.616 11.5778 12.863 12.0901C12.223 12.5001 11.8847 13.2488 12 14.0001" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16.5C11.7243 16.5 11.5 16.2757 11.5 16C11.5 15.7243 11.7243 15.5 12 15.5C12.2757 15.5 12.5 15.7243 12.5 16C12.5 16.2757 12.2757 16.5 12 16.5Z" fill="#999999"/>
            <path d="M12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15Z" fill="#999999"/>
        </svg>
    );
};

export default HelpIcon;
