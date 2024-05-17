import React, { FC } from "react";
import Link from "next/link";

import BreadcrumbsIcon from "@/shared/icons/breadcrumbArrowIcon/BreadcumbsIcon";

import styles from "../styles.module.scss";

interface CrumbProps {
    href: string;
    title: string;
    last: boolean;
}

const Crumb: FC<CrumbProps> = (props) => {
    const { href, title, last } = props;

    return (
        <>
            {last ? (
                <>
                    <li className={styles.crumb}>
                        <Link className={styles.link} href={href}>
                            {title}
                        </Link>
                    </li>
                    <BreadcrumbsIcon className={styles.icon} />
                </>
            ) : (
                <li className={styles.lastCrumb} key={href}>
                    {title}
                </li>
            )}
        </>
    );
};

export default Crumb;
