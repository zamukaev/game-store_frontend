import React, { useCallback, useEffect, useRef, useState } from "react";

import SuccessfulCheck from "@/shared/icons/successfulCheck/SuccessfulCheck";

import useRatingStore from "@/features/productActions/model/rating-store";

import Headline from "../headline/Headline";

import styles from "./styles.module.scss";

export const ANIMATION_DELAY = 200;

export const ThanksForFeedback = () => {
    const { rating, feedback, experience } = useRatingStore();

    const summaryInformation = {
        rating,
        feedback,
        experience,
    };

    useEffect(() => {
        console.log(summaryInformation);
    }, [feedback, experience, rating]);

    return (
        <div className={styles.container}>
            <Headline className={styles.thanks_title}>Спасибо!</Headline>
            <SuccessfulCheck className={styles.success_check} />
            <p className={styles.push_rating}>Ваш отзыв отправлен</p>
        </div>
    );
};
