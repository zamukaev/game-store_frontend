import React from "react";

import Link from "next/link";

import styles from "./styles.module.scss";

export default function InCart() {
    return (
        <Link href="/cart">
            <button className={styles.cart__button}>В корзину</button>
        </Link>
    );
}
