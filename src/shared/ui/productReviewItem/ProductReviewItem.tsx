import React, { FC } from "react";

import Headline, { HeadlineSize } from "../headline/Headline";
import Scores from "../scores/Scores";

import styles from "./ProductReviewItem.module.scss";

interface ProductReviewItemProps {
    review: {
        user: string;
        rating: number;
        date: string;
        advantages: string;
        disadvantages: string;
        comment: string;
    };
}

const ProductReviewItem: FC<ProductReviewItemProps> = ({ review }) => {
    return (
        <div className={styles.review}>
            <div className={styles.review__header}>
                <div className={styles.review__header_left}>
                    <Headline Size={HeadlineSize.M}>{review.user}</Headline>
                    <Scores
                        isEditable={false}
                        rating={review.rating}
                        widthIcon="15"
                        heightIcon="15"
                    />
                </div>
                <p className={styles.review__header_date}>{review.date}</p>
            </div>
            <div className={styles.review__items}>
                <div className={styles.review__item}>
                    <Headline Size={HeadlineSize.S}>Достоинства</Headline>
                    {review.advantages}
                </div>
                <div className={styles.review__item}>
                    <Headline Size={HeadlineSize.S}>Недостатки</Headline>
                    {review.disadvantages}
                </div>
                <div className={styles.review__item}>
                    <Headline Size={HeadlineSize.S}>Комментарий</Headline>
                    {review.comment}
                </div>
            </div>
        </div>
    );
};

export default ProductReviewItem;
