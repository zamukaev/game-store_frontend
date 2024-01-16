"use client";

import React, { ChangeEvent, FC, useState } from "react";

import styles from "./styles.module.scss";

interface ReviewInputProps {
    placeholder: string;
    label: string;
}

const ReviewInput: FC<ReviewInputProps> = ({ label, placeholder }) => {
    const [reviewQuery, setReviewQuery] = useState<string>("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setReviewQuery(event.target.value);
    };

    return (
        <div>
            <label className={styles.label}>{label}</label>
            <div className={styles.form} data-testid="reviewInput">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={reviewQuery}
                    onChange={handleInputChange}
                    className={styles.input}
                />
            </div>
        </div>
    );
};

export default ReviewInput;
