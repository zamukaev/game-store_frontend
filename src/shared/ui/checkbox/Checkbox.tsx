"use client";
import React from "react";

import styles from "./styles.module.scss";

interface CheckboxProps {
    onCheckHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    labelId?: string;
    checked?: boolean;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    className?: string;
}

const Checkbox = (props: CheckboxProps) => {
    const {
        onCheckHandler,
        value = "",
        labelId,
        left,
        top,
        right,
        bottom,
        checked,
        className,
    } = props;
    const position = {
        top: top,
        left: left,
        right: right,
        bottom: bottom,
    };
    const cls = `${styles.container} ${className}`;
    return (
        <label className={cls} style={position}>
            <input
                type="checkbox"
                id={labelId}
                checked={checked}
                onChange={onCheckHandler}
                className={styles.input}
                value={value}
            />
            <div className={styles.indicator} />
        </label>
    );
};

export default Checkbox;
