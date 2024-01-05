import { FC, InputHTMLAttributes } from "react";

import styles from "./styles.module.scss";

export enum RadioTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    id: string;
    text?: string;
    name?: string;
    value: string;
    checked?: boolean;
    theme?: RadioTheme;
    changeHandler?: (value: string) => void;
}

const RadioButton: FC<RadioButtonProps> = (props) => {
    const {
        id,
        text,
        name,
        value,
        theme = RadioTheme.PRIMARY,
        className,
        changeHandler,
        ...otherProps
    } = props;
    const cls = `${styles.radio} ${styles[theme]} ${className}`;

    const optionChangeHandle = (value: string) => {
        if (changeHandler) {
            changeHandler(value);
        }
    };

    return (
        <label data-testid="radio" className={cls} htmlFor={id}>
            <input
                className={styles.input}
                onChange={() => optionChangeHandle(value)}
                type="radio"
                id={id}
                name={name}
                value={value}
                {...otherProps}
            />
            <span data-testid="title" className={`${styles.item}`}>
                {text}
            </span>
        </label>
    );
};

export default RadioButton;
