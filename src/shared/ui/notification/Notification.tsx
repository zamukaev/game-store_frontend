"use client";

import { FC, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import Button from "@/shared/ui/button/Button";
import CloseIcon from "@/shared/icons/closeIcon/CloseIcon";

import styles from "./styles.module.scss";

export enum NotificationTheme {
    SUCCESSFUL = "success",
    FAILED = "failed",
}

interface NotificationProps {
    className?: string;
    children?: ReactNode;
    theme?: NotificationTheme;
    visible?: boolean;
    setVisible?: (value: boolean) => void;
    onClick?: () => void;
}

const Notification: FC<NotificationProps> = (props) => {
    const {
        className = "",
        children,
        theme = NotificationTheme.SUCCESSFUL,
        visible,
        setVisible,
    } = props;

    const cls = `${styles.notification} ${styles[theme]} ${
        visible && styles.visible
    } ${className}`;
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const visibleHandle = () => {
        if (setVisible) {
            setVisible(false);
        }
    };

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            if (setVisible) {
                setVisible(false);
            }
        }, 3000);

        return () => {
            clearTimeout(timerRef.current);
        };
    }, [setVisible]);

    return createPortal(
        <div data-testid="notification" className={cls}>
            <Button
                data-testid="close-btn"
                onClick={visibleHandle}
                className={styles.closeBtn}
                kind="clear"
            >
                <CloseIcon />
            </Button>
            <p className={styles.text}>{children}</p>
        </div>,
        document.body
    );
};

export default Notification;
