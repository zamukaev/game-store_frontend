import { FC, ReactNode } from "react";

import styles from "./styles.module.scss";

export enum HeadlineSize {
    L = "h1",
    M = "h2",
    S = "h3",
}

interface HeadlineProps {
    className?: string;
    Size?: HeadlineSize;
    children?: ReactNode;
}

const Headline: FC<HeadlineProps> = (props) => {
    const {
        className = " ",
        Size = HeadlineSize.M,
        children,
        ...otherProps
    } = props;
    const cls = `${styles[Size]} ${className}`;

    return (
        <Size data-testid="title" className={cls} {...otherProps}>
            {children}
        </Size>
    );
};

export default Headline;
