"use client";
import { FC, ReactNode, useCallback, useEffect, useRef, useState } from "react";

import CloseIcon from "@/shared/icons/closeIcon/CloseIcon";

import useRatingStore from "@/features/productActions/model/rating-store";

import { Portal } from "..";

import styles from "./styles.module.scss";

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const ANIMATION_DELAY = 200;

const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpen, onClose } = props;

    const { currentStage } = useRatingStore();

    const [isOpening, setIsOpening] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const cls = `${styles.modal} ${isOpening && styles.isOpening} ${
        isClosing && styles.isClosing
    } ${className}`;

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsOpening(false);
                setIsClosing(false);
                setIsMounted(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeHandler();
            }
        },
        [closeHandler]
    );

    const contentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            timerRef.current = setTimeout(() => {
                setIsOpening(true);
            }, ANIMATION_DELAY);
        } else {
            timerRef.current = setTimeout(() => {
                setIsOpening(false);
            }, ANIMATION_DELAY);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    useEffect(() => {
        if (currentStage === 4) {
            timerRef.current = setTimeout(() => {
                closeHandler();
            }, 2000);
        }

        return () => {
            clearTimeout(timerRef.current);
        };
    }, [currentStage, isOpen]);

    return (
        <Portal selector="body">
            <div className={cls}>
                <div className={styles.overlay} onClick={closeHandler}>
                    <div className={styles.content} onClick={contentClick}>
                        {children}
                        <span
                            onClick={closeHandler}
                            aria-description="close button"
                            className={styles.close}
                        >
                            <CloseIcon
                                fill="#696969"
                                className={styles.close_icon}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
