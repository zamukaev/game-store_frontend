"use client";

import { useCallback, useEffect, useRef, useState, ReactNode } from "react";

import { ModalCartProducts } from "@/widgets/modalCartProducts";

import Portal from "../portal/Portal";

import styles from "./styles.module.scss";

interface ModalProps {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export const CartModal = ({ active, setActive }: ModalProps) => {
    const [overlayActive, setOverlayActive] = useState(false);

    useEffect(() => {
        const closeTimeout = setTimeout(() => {
            setActive(false);
        }, 3000);

        return () => {
            clearTimeout(closeTimeout);
        };
    }, [active]);

    return (
        <div
            className={`${active ? styles.modal : styles.modal} ${
                active ? styles.active : ""
            }`}
            onClick={() => setActive(false)}
        >
            <div
                className={`${
                    active ? styles.modal__content : styles.modal__content
                } ${active ? styles.active : ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                <ModalCartProducts />
            </div>
        </div>
    );
};
