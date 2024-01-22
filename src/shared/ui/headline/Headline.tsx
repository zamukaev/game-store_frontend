import { FC, ReactNode } from "react";

import styles from "./styles.module.scss";

export enum HeadlineSize {
    L = "l",
    M = "m",
}
export enum HTag {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3"
}

interface HeadlineProps {
    className?: string;
    size?: HeadlineSize;
    H?: HTag;
    children?: ReactNode;
}

const Headline: FC<HeadlineProps> = (props) => {
    const {
        className = " ",
        size = HeadlineSize.M,
        H = HTag.H2,
        children
    } = props;
    const cls = `${styles[size]} ${className}`;

    return <H data-testid="title" className={cls}>{children}</H>;
};

export default Headline;