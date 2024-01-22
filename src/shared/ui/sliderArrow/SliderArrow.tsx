import React, { CSSProperties, FC } from "react";

import ArrowNextIcon from "@/shared/icons/arrowNextIcon/arrowNextIcon";
import ArrowPrevIcon from "@/shared/icons/arrowPrevIcon/arrowPrevIcon";

import styles from "./styles.module.scss";

interface SliderArrowProps {
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
    kind: "prev" | "next";
}

const SliderArrow: FC<SliderArrowProps> = (props) => {
    const { className, style, onClick, kind } = props;

    const IconComponent = kind === "prev" ? ArrowPrevIcon : ArrowNextIcon;
    const arrowClasses = `${styles.arrow} ${className || ""}`.trim();

    return (
        <div
            className={arrowClasses}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        >
            <IconComponent />
        </div>
    );
};

export default SliderArrow;
