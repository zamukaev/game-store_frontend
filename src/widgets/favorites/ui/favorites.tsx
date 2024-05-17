"use client";

import Link from "next/link";

import { ProductCard } from "@/shared/ui";
import ArrowPrevIcon from "@/shared/icons/arrowPrevIcon/arrowPrevIcon";

import { mockDataForMapping } from "@/widgets/favorites/mock";

import styles from "./styles.module.scss";

export default function FavoritesWidget() {
    return (
        <div>
            <Link href="/">
                <div className={styles.block__return_back_button}>
                    <ArrowPrevIcon />
                    <p className={styles.block__return_back}>
                        Вернуться к покупкам
                    </p>
                </div>
            </Link>

            <div className={styles.block__display_flex}>
                <h1 className={styles.block__favorite_section}>Избранное</h1>
                <p className={styles.block__count_items}>
                    {mockDataForMapping.length} товаров
                </p>
            </div>

            <div className={styles.block__container}>
                {mockDataForMapping.map((value) => {
                    return (
                        <div key={value._id} className={styles.block__product}>
                            <ProductCard key={value.title} product={value} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
