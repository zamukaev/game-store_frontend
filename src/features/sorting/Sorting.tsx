import { FC, useCallback, useState } from "react";

import CheckIcon from "@/components/shared/icons/checkIcon/CheckIcon";
import ArrowsIcon from "@/components/shared/icons/arrowsIcon/ArrowsIcon";

import styles from "./styles.module.scss";

export interface OptionsType {
    id: string;
    option: string;
    value: string,
}
export const options: OptionsType[] = [
    { id: "12d4", value: "popular", option: "Сначала популярные" },
    { id: "df355", value: "cheap", option: "Сначала дешевые" },
    { id: "3f25", value: "expensive", option: "Сначала дороже" }
];

interface SortingProps {
    className?: string;
};

const Sorting: FC<SortingProps> = (props) => {
    const {
        className = "",
    } = props;
    const cls = `${styles.sorting} ${className}`;

    const [isActive, setIsActive] = useState(false);
    const [optionsActive, setOptionsActive] = useState(0);
    const [optionsValue, setOptionsValue] = useState(options[0].option);
    const [selectedValue, setSelectedValue] = useState("popular");

    const selectHandle = useCallback((index: number, value: string, content: string) => {
        setOptionsActive(index);
        setOptionsValue(content);
        setSelectedValue(value);
        setIsActive(false);
    }, []);

    const openSelectHandle = useCallback(() => {
        setIsActive(!isActive);
    }, [isActive]);

    return (
        <div data-testid="sorting" className={cls}>
            <h6
                data-testid="title"
                onClick={openSelectHandle}
                className={`${styles.title}`}
            >
                <span className={styles.item}>{optionsValue}</span>
                <ArrowsIcon className={`${styles.arrow} ${isActive ? styles.rotate : ""}`} />
            </h6>
            <ul role="list" className={`${styles.select} ${isActive ? styles.opened : ""}`}>
                {options.map((item: OptionsType, index) => (
                    <li
                        data-testid="list-item"
                        onClick={() => selectHandle(index, item.value, item.option)}
                        key={item.id}
                        className={`${styles.option} ${optionsActive === index ? styles.active : ""}`}
                    >
                        {item.option} {optionsActive === index && <CheckIcon data-testid="arrows-icon" />}
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default Sorting;