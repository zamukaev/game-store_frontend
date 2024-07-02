import React, { useState } from "react";

import useRatingStore from "@/features/productActions/model/rating-store";

import UserInput from "../userInput/UserInput";
import RadioButton from "../radioButton/RadioButton";
import Headline from "../headline/Headline";

import styles from "./styles.module.scss";

export const SecondFeedback = () => {
    const {
        rating,
        currentStage,
        setCurrentStage,
        feedback,
        setFeedback,
        experience,
        setExperienceCategory,
    } = useRatingStore();

    const summaryInformation = {
        rating,
        feedback,
        experience,
    };

    React.useEffect(() => {
        console.log(summaryInformation);
    }, [feedback, experience, rating]);

    const [errors, setErrors] = useState<string>("");

    const goToNextStage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!feedback.virtues && !feedback.defects && !feedback.commentary) {
            setErrors("Пожалуйста, заполните хотя бы одно поле");
            return;
        }
        setErrors("");
        setCurrentStage(currentStage + 1);
    };

    const handleExperienceChange = (value: string) => {
        setExperienceCategory(value);
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.leave_feedback}>Оставить отзыв</h3>
            <p className={styles.detailed_rating}>
                Пожалуйста оставьте подробный отзыв о товаре
            </p>
            <form>
                <UserInput
                    kind={"virtues"}
                    value={feedback.virtues}
                    onChange={(value: any) => setFeedback("virtues", value)}
                />
                <UserInput
                    kind={"defects"}
                    value={feedback.defects}
                    onChange={(value: any) => setFeedback("defects", value)}
                />
                <UserInput
                    kind={"commentary"}
                    value={feedback.commentary}
                    onChange={(value: any) => setFeedback("commentary", value)}
                />
                <p className={styles.experience}>Опыт использования</p>
                <div className={styles.block__flex}>
                    <div className={styles.line_choice}>
                        <RadioButton
                            id="my-radio1"
                            name="experience"
                            value="my-radio-button-month"
                            checked={experience === "my-radio-button-month"}
                            changeHandler={handleExperienceChange}
                            width={10}
                            height={10}
                        />
                        <p className={styles.detailed_feedback}>Менее месяца</p>
                    </div>
                    <div className={styles.line_choice}>
                        <RadioButton
                            id="my-radio2"
                            name="experience"
                            value="my-radio-button-months"
                            checked={experience === "my-radio-button-months"}
                            changeHandler={handleExperienceChange}
                            width={10}
                            height={10}
                        />
                        <p className={styles.detailed_feedback}>
                            Несколько месяцев
                        </p>
                    </div>
                    <div className={styles.line_choice}>
                        <RadioButton
                            id="my-radio3"
                            name="experience"
                            value="my-radio-button-year"
                            checked={experience === "my-radio-button-year"}
                            changeHandler={handleExperienceChange}
                            width={10}
                            height={10}
                        />
                        <p className={styles.detailed_feedback}>Более года</p>
                    </div>
                </div>
                <button
                    onClick={goToNextStage}
                    className={styles.send_feedback}
                >
                    Отправить
                </button>
                {errors !== "" ? (
                    <Headline className={styles.error_info}>{errors}</Headline>
                ) : null}
            </form>
        </div>
    );
};
