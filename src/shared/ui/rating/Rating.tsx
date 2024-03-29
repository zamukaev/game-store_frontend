"use client";

import {
    FC,
    HTMLAttributes,
    DetailedHTMLProps,
    useState,
    useEffect,
} from "react";

import StarIcon from "@/shared/icons/starIcon/StarIcon";

import styles from "./styles.module.scss";

interface RatingProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLUListElement>,
        HTMLUListElement
    > {
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
}

const Rating: FC<RatingProps> = (props): JSX.Element => {
    const { rating, isEditable, setRating } = props;

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
        new Array(5).fill(<></>)
    );

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            const cls = `${styles.star} ${
                i < currentRating ? styles.filled : ""
            }`;
            return (
                <span
                    key={i}
                    className={cls}
                    onMouseEnter={() => changeDispay(i + 1)}
                    onMouseLeave={() => changeDispay(rating)}
                    onClick={() => onClick(i + 1)}
                >
                    <StarIcon />
                </span>
            );
        });
        setRatingArray(updatedArray);
    };

    const changeDispay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    };

    const onClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    return (
        <ul role="list" className={styles.rating}>
            {ratingArray.map((r, i) => (
                <li key={i}>{r}</li>
            ))}
        </ul>
    );
};

export default Rating;
