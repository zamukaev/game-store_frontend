"use client";

import { FC, useState } from "react";

import MinusIcon from "@/shared/icons/minus/MinusIcon";
import PlusIcon from "@/shared/icons/plus/PlusIcon";

import Button from "../button/Button";

import styles from "./styles.module.scss";

interface CounterProps {
    initialCount?: number;
}

const Counter: FC<CounterProps> = ({ initialCount = 0 }): JSX.Element => {
    const [count, setCount] = useState(initialCount);

    const increment = () => setCount((prevCount) => prevCount + 1);
    const decrement = () => setCount((prevCount) => Math.max(0, prevCount - 1));

    return (
        <div data-testid="counter" className={styles.counter}>
            <Button
                data-testid="decrement"
                className={styles.itemDecrement}
                onClick={decrement}
                kind="clear"
            >
                <PlusIcon />
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
