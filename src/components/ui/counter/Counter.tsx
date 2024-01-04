import { FC } from "react";

import Minus from "@/components/shared/icons/minus/Minus";

import Plus from "@/components/shared/icons/plus/Plus";

import Button from "../button/Button";

import styles from "./styles.module.scss";

interface CounterProps {
    count: number;
    setCount?: (value: any) => void;
}

const Counter: FC<CounterProps> = (props): JSX.Element => {
    const { count, setCount } = props;

    const additionCountHandler = () => {
        if (setCount) {
            setCount((prev: number) => prev + 1);
        }
    };

    const discriminationCountHandler = () => {
        if (count > 0 && setCount) {
            setCount((prev: number) => prev - 1);
        }
    };

    return (
        <div data-testid="counter" className={styles.counter}>
            <Button
                data-testid="decrement"
                className={styles.item}
                onClick={discriminationCountHandler}
                kind="clear"
            >
                <Minus />
            </Button>
            <span data-testid="value-title">{count}</span>
            <Button
                data-testid="increment"
                className={styles.item}
                onClick={additionCountHandler}
                kind="clear"
            >
                <Plus />
            </Button>
        </div>
    );
};

export default Counter;
