"use client";
import { FC, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
    selector: string;
    children: ReactNode;
}

const Portal: FC<PortalProps> = (props) => {
    const { children, selector = "body" } = props;

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (isMounted) {
        const portalDiv = document.querySelector(selector) as
            | Element
            | DocumentFragment;
        return createPortal(children, portalDiv);
    } else {
        return null;
    }
};

export default Portal;
