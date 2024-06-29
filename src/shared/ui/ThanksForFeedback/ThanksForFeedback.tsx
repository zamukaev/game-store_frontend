import React, { useCallback, useRef, useState } from "react";

import SuccessfulCheck from "@/shared/icons/successfulCheck/SuccessfulCheck";

import useRatingStore from "@/features/productActions/model/rating-store";

import Headline from "../headline/Headline";

import styles from "./styles.module.scss";

export const ANIMATION_DELAY = 200;

export const ThanksForFeedback = ({
    closeHandler,
}: {
    closeHandler: () => void;
}) => {
    const { currentStage } = useRatingStore();

    return (
        <div className={styles.container}>
            <Headline className={styles.thanks_title}>Спасибо!</Headline>
            <SuccessfulCheck className={styles.success_check} />
            <p className={styles.push_rating}>Ваш отзыв отправлен</p>
            <button className={styles.later_submit} onClick={closeHandler}>
                Продолжить
            </button>
        </div>
    );
};
