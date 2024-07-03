import React, { useState } from "react";
import Image from "next/image";

import { useQuery } from "@tanstack/react-query";

import useRatingStore from "@/features/productActions/model/rating-store";

import { getProduct } from "@/widgets/product/api";

import { Product as ProductType } from "@/shared/types/product";

import Headline from "../headline/Headline";

import Rating from "../rating/Rating";

import styles from "./styles.module.scss";

export default function LeaveFeedback() {
    const [onClose, setOnClose] = useState<boolean>(false);

    const { rating, setRating, currentStage, setCurrentStage } =
        useRatingStore();

    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    const { data: product } = useQuery<ProductType | undefined>({
        queryKey: ["product"],
    });

    const goToNextStage = () => {
        setCurrentStage(currentStage + 1);
    };

    return (
        <div className={styles.container}>
            <Image
                src={product?.urlImages[0] ?? ""}
                alt="Product Image"
                width={120}
                height={120}
                className={styles.product_image}
            />
            <Headline className={styles.product_title}>
                {product?.title}
            </Headline>
            <Headline className={styles.question_about_rating}>
                Вам понравился товар?
            </Headline>
            <Rating
                rating={rating}
                onChange={handleRatingChange}
                isEditable={true}
                setRating={setRating}
            />
            <button onClick={goToNextStage} className={styles.rating}>
                Оценить
            </button>
        </div>
    );
}
