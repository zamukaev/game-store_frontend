"use client";
import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
    selector?: string;
    children: ReactNode;
}

const Portal: FC<PortalProps> = (props) => {
    const {
        children,
        selector = "body"
    } = props;

    const portalDiv = document.querySelector(selector) as HTMLElement;

    return createPortal(children, portalDiv);
};

export default Portal;