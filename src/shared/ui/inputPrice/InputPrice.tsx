import React, { InputHTMLAttributes, FC, ChangeEvent } from "react";

import { OptionsType } from "@/configs/options";

import styles from "./styles.module.scss";

export interface InputPriceProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
    className?: string;
    placeholder: string;
    value?: number;
    type: string;
    setValue: (value: any) => void;
}

const InputPrice: FC<InputPriceProps> = ({
    className,
    placeholder,
    value,
    type,
    setValue,
    ...props
}) => {
    const cls = `${styles.inputPrice} ${className}`;
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const newValue = inputValue === "" ? 0 : Number(inputValue);
        setValue((prev: OptionsType) => ({ ...prev, [type]: newValue }));
    };

    return (
        <input
            className={cls}
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
