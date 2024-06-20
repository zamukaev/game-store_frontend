"use client";

import { FC, HTMLAttributes, DetailedHTMLProps, useState } from "react";

import SmallStarIcon from "@/shared/icons/smallStarIcon/SmallStarIcon";

import styles from "./styles.module.scss";

interface RatingProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLUListElement>,
        HTMLUListElement
    > {
    className?: string;
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
}

const Scores: FC<RatingProps> = (props): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
        new Array(5).fill(<></>)
    );

    const { rating, className } = props;
    const cls = `${styles.scores} ${className}`;

    return (
        <ul role="list" className={cls}>
            {ratingArray.map((r, i) => (
                <li
                    className={`${styles.item} ${
                        i < rating ? styles.filled : ""
                    }`}
                    key={i}
                >
                    <SmallStarIcon />
                </li>
            ))}
        </ul>
    );
};

export default Scores;
