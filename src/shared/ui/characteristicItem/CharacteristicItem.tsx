import React, { FC } from "react";

import { Headline, HeadlineSize } from "@/shared/ui";

import styles from "./CharacteristicItem.module.scss";

type Children = {
    label: string;
    value: string;
};

interface CharacteristicItemProps {
    title: string;
    childrens: Children[];
}

const CharacteristicItem: FC<CharacteristicItemProps> = ({
    title,
    childrens,
}) => {
    return (
        <div className={styles.characteristic}>
            <Headline
                Size={HeadlineSize.M}
                className={styles.characteristic__title}
            >
                {title}
            </Headline>
            <div className={styles.characteristic__childrens}>
                {childrens.map((item) => (
                    <div
                        key={item.label}
                        className={styles.characteristic__childrens_item}
                    >
                        <p>{item.label}</p>
                        <p>{item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CharacteristicItem;
