import { FC, HTMLAttributes, DetailedHTMLProps, useState } from "react";

import SmallStarIcon from "@/components/shared/icons/smallStarIcon/SmallStarIcon";

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

const Rating: FC<RatingProps> = (props): JSX.Element => {
    const { rating, className } = props;
    const cls = `${styles.scores} ${className}`;
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
        new Array(5).fill(<></>)
    );

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

export default Rating;
