const SuccessfulCheck: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width="90"
            height="90"
            viewBox="0 0 90 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="45"
                cy="45"
                r="44"
                fill="white"
                stroke="#FF6B00"
                strokeWidth="2"
            />
            <path
                d="M32.4167 46.0415L42.1397 55.4165L61.5834 36.6665"
                stroke="#FF6B00"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default SuccessfulCheck;
