import React, { useState } from "react";

import useRatingStore from "@/features/productActions/model/rating-store";

import Headline from "../headline/Headline";

import Rating from "../rating/Rating";

import styles from "./stylees.module.scss";

export default function ThanksForRating() {
    const { rating, currentStage, setCurrentStage, setRating } =
        useRatingStore();

    const [isClosing, setIsClosing] = useState(true);

    const closeHandler = () => {
        setIsClosing(!isClosing);
    };

    const goToNextStage = () => {
        setCurrentStage(currentStage + 1);
    };

    return (
        <div className={styles.container}>
            <Headline className={styles.thanks_for_rating}>
                Спасибо за оценку!
            </Headline>
            <Rating rating={rating} onChange={setRating} />
            <p className={styles.question_rating}>
                Поделитесь своими впечатлениямио товаре с другими покупателями
            </p>
            <button onClick={goToNextStage} className={styles.rating}>
                Оставить отзыв
            </button>
        </div>
    );
}
