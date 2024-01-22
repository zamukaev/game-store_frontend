import React from "react";

import Link from "next/link";
import Image from "next/image";

import logo from "./logo.png";

import styles from "./style.module.scss";

const Logo = () => {
    return (
        <Link href="/" className={styles.logo}>
            <Image src={logo} alt="logo" width={70} height={70} />
            <h1 className={styles.logo__title}>
                GAME <br /> STORE
            </h1>
        </Link>
    );
};

export default Logo;
