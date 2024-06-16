"use client";

import { FC } from "react";

import MinusIcon from "@/shared/icons/minus/MinusIcon";
import PlusIcon from "@/shared/icons/plus/PlusIcon";

import Button from "../button/Button";

import styles from "./styles.module.scss";

interface CounterProps {
    initialCount?: number;
    count: number;
    increment?: () => void;
    decrement?: () => void;
}

const Counter: FC<CounterProps> = (props): JSX.Element => {
    const { count, decrement, increment } = props;

    return (
        <div data-testid="counter" className={styles.counter}>
            <Button
                data-testid="decrement"
                className={styles.itemDecrement}
                onClick={decrement}
                kind="clear"
            >
                <MinusIcon />
            </Button>
            <span data-testid="value-title">{count}</span>
            <Button
                data-testid="increment"
                className={styles.itemIncrement}
                onClick={increment}
                kind="clear"
            >
                <PlusIcon />
            </Button>
        </div>
    );
};

export default Counter;
