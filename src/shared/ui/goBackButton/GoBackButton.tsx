import { ArrowPrevGreyIcon } from "@/shared/icons/ArrowPrevGreyIcon/ArrowPrevGreyIcon";

import { AppLink } from "..";

import { AppLinkTheme } from "../appLink/AppLink";

import styles from "./styles.module.scss";

interface GoBackButtonProps {
    className?: string;
    text: string;
    href?: string;
}

const GoBackButton = ({ text, className, href = "/" }: GoBackButtonProps) => {
    const cls = `${styles.go_back_btn} ${className}`;
    return (
        <AppLink theme={AppLinkTheme.DEFAULT} className={cls} href={href}>
            <ArrowPrevGreyIcon className={styles.back_btn_icon} />
            <p className={styles.back_btn_text}>{text}</p>
        </AppLink>
    );
};

export default GoBackButton;
