import React from "react";

const Arrow = ({ className = "" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className={className}
        >
            <path
                d="M12.6667 5.33325L8.00004 10.6666L3.33337 5.33325"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Arrow;
