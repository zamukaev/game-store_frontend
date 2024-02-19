"use client";
import React, { FC } from "react";
import { usePathname } from "next/navigation";

import Crumb from "./crumb/Crumb";
import styles from "./styles.module.scss";

interface BreadcrumbsProps {
    className?: string;
    crumb?: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ crumb, className }) => {
    const cls = `${styles.breadcrumbs} ${className}`;

    const paths = usePathname();

    const breadcrumbs = [
        { title: "Главная", href: "/" },
        { title: "Каталог", href: "/catalog" },
    ];

    if (crumb) {
        breadcrumbs.push({ title: crumb, href: paths });
    }

    return (
        <ul className={cls}>
            {breadcrumbs.map((crumb, index) => (
                <Crumb
                    key={crumb.href}
                    href={crumb.href}
                    title={crumb.title}
                    last={breadcrumbs.length !== index + 1}
                />
            ))}
        </ul>
    );
};

export default Breadcrumbs;