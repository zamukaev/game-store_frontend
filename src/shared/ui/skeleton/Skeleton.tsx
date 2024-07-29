import { CSSProperties, FC } from "react";

import styles from "./styles.module.scss";

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

const Skeleton: FC<SkeletonProps> = (props) => {
    const { className, width, height, border, ...otherProps } = props;

    const cssStyles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    const cls = `${styles.skeleton} ${className}`;

    return <div style={cssStyles} className={cls} {...otherProps}></div>;
};
export default Skeleton;
