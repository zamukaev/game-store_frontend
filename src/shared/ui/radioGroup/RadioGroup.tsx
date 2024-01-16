import { FC } from "react";

import RadioButton from "../radioButton/RadioButton";

import styles from "./styles.module.scss";

interface RadioGroupProps {}

const RadioGroup: FC<RadioGroupProps> = () => {
    const changeHandler = (value: string) => {
        console.log(value);
    };
    return (
        <div className={styles.group}>
            <RadioButton
                changeHandler={changeHandler}
                id="Несколько месяцев"
                name="filter"
                value="Несколько месяцев"
                text="Несколько месяцев"
            />
            <RadioButton
                changeHandler={changeHandler}
                id="Менее месяца"
                name="filter"
                value="Менее месяца"
                text="Менее месяца"
            />
        </div>
    );
};

export default RadioGroup;
