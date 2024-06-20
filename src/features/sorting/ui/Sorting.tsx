import { FC, useCallback, useState } from "react";

import ArrowsIcon from "@/shared/icons/arrowsIcon/ArrowsIcon";
import CheckIcon from "@/shared/icons/checkIcon/CheckIcon";

import styles from "./styles.module.scss";

export interface OptionsType {
    id: string;
    option: string;
    value: string;
}

export const options: OptionsType[] = [
    { id: "12d4", value: "popular", option: "Сначала популярные" },
    { id: "df355", value: "price_asc", option: "Сначала дешевые" },
    { id: "3f25", value: "price_desc", option: "Сначала дороже" },
];

interface SortingProps {
    className?: string;
    setSelectedValue?: (value: string) => void;
}

const Sorting: FC<SortingProps> = (props) => {
    const { className = "", setSelectedValue } = props;
    const cls = `${styles.sorting} ${className}`;

    const [isActive, setIsActive] = useState(false);
    const [optionsActive, setOptionsActive] = useState(0);
    const [optionsValue, setOptionsValue] = useState(options[0].option);

    const selectHandle = useCallback(
        (index: number, value: string, content: string) => {
            setOptionsActive(index);
            setOptionsValue(content);
            setSelectedValue && setSelectedValue(value);
            setIsActive(false);
        },
        [setSelectedValue]
    );

    const openSelectHandle = useCallback(() => {
        setIsActive(!isActive);
    }, [isActive]);

    const closeSelectHandle = useCallback(() => {
        setIsActive(false);
    }, []);

    return (
        <>
            <div
                onClick={closeSelectHandle}
                className={`${styles.underlay} ${
                    isActive ? styles.active : ""
                }`}
            ></div>
            <div
                className={cls}
                data-testid="sorting"
                onClick={openSelectHandle}
            >
                <h6 data-testid="title" className={`${styles.title}`}>
                    <span className={styles.item}>{optionsValue}</span>
                    <ArrowsIcon
                        className={`${styles.arrow} ${
                            isActive ? styles.rotate : ""
                        }`}
                    />
                </h6>
                <ul
                    role="list"
                    className={`${styles.select} ${
                        isActive ? styles.opened : ""
                    }`}
                >
                    {options.map((item: OptionsType, index) => (
                        <li
                            data-testid="list-item"
                            onClick={() =>
                                selectHandle(index, item.value, item.option)
                            }
                            key={item.id}
                            className={`${styles.option} ${
                                optionsActive === index ? styles.active : ""
                            }`}
                        >
                            {item.option}{" "}
                            {optionsActive === index && (
                                <CheckIcon data-testid="arrows-icon" />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Sorting;
