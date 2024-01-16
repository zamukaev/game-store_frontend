import React, { InputHTMLAttributes, FC, ChangeEvent } from "react";

import styles from "./styles.module.scss";

export interface InputPriceProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
    placeholder: string;
    value?: number;
    setValue: (value: number) => void;
}

const InputPrice: FC<InputPriceProps> = ({
    placeholder,
    value,
    setValue,
    ...props
}) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const newValue = inputValue === "" ? 0 : Number(inputValue);
        setValue(newValue);
    };

    return (
        <input
            className={styles.inputPrice}
            placeholder={placeholder}
            type="number"
            value={value === 0 ? "" : value}
            onChange={handleChange}
            aria-label="input-price"
            maxLength={8}
            {...props}
        />
    );
};

export default InputPrice;
