import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import SliderBlock from "@/shared/ui/slider/Slider";

import { getDiscounts, getHits } from "../api";

import styles from "./styles.module.scss";

const Products = () => {
    const {
        data: hits,
        error: hitsError,
        isLoading: isHitsLoading,
    } = useQuery({ queryKey: ["hits"], queryFn: getHits });

    const {
        data: discounts,
        error: discountsError,
        isLoading: isDiscountsLoading,
    } = useQuery({ queryKey: ["discounts"], queryFn: getDiscounts });

    return (
        <div className={styles.products}>
            <SliderBlock
                title="Хиты продаж"
                items={hits ?? []}
                loading={isHitsLoading || Boolean(hitsError)}
            />
            <SliderBlock
                title="Акции"
                items={discounts ?? []}
                loading={isDiscountsLoading || Boolean(discountsError)}
            />
        </div>
    );
};

export default Products;
