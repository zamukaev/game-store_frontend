"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { OptionsType } from "@/shared/types/options";
import {
    BreadCrumb,
    Button,
    Headline,
    HeadlineSize,
    ProductCard,
    ProductsPageLoader,
    SubcategoriesEmpty,
} from "@/shared/ui";
import { Product } from "@/shared/types/product";

import { Sorting } from "@/features/sorting";
import { Filters } from "@/features/filters";

import { getProductsBySubcategory } from "@/widgets/goods/api/getProductsBySubcategory";

import FiltersIcon from "@/shared/icons/filtersIcon/FiltersIcon";

import styles from "./styles.module.scss";

const Goods = ({ slug, item }: { slug: string; item: string }) => {
    const [selectedValue, setSelectedValue] = useState("popular");
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    const [options, setOptions] = useState<OptionsType>({
        priceFrom: 0,
        priceTo: 100000,
        hits: false,
        promotion: false,
        inStock: false,
    });

    const queryParams = new URLSearchParams({
        subcategory: "Wi-Fi роутеры",
        sort: selectedValue,
        minPrice: options.priceFrom.toString(),
        maxPrice: options.priceTo.toString(),
        discount: options.promotion.toString(),
        hit: options.hits.toString(),
        inStock: options.inStock.toString(),
    });

    const {
        data: subcategory,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["products"],
        queryFn: () => getProductsBySubcategory(queryParams),
    });

    useEffect(() => {
        const fetchProducts = async () => {
            await refetch();
        };
        fetchProducts();
    }, [options, selectedValue, refetch, subcategory]);

    useEffect(() => {
        setOptions((prev) => ({ ...prev, priceTo: 4000 }));
    }, []);

    return (
        <section className={styles.content}>
            <BreadCrumb crumb={subcategory?.title} />
            {isLoading ? (
                <ProductsPageLoader />
            ) : (
                <>
                    <Headline Size={HeadlineSize.L} className={styles.title}>
                        {subcategory?.title}
                    </Headline>
                    <Sorting
                        className={styles.sorting}
                        setSelectedValue={setSelectedValue}
                    />
                    <Button
                        className={styles.filters}
                        onClick={() => setIsFiltersVisible(!isFiltersVisible)}
                        kind="clear"
                    >
                        <FiltersIcon /> <span>Фильтры</span>
                    </Button>
                    <div className={styles.container}>
                        {!subcategory?.subcategories?.length ? (
                            <SubcategoriesEmpty
                                content="Нам не удалось найти результаты, соответствующие критериям поиска"
                                className={styles.empty}
                            />
                        ) : (
                            <ul className={styles.products}>
                                {subcategory.subcategories?.map(
                                    (product: Product) => (
                                        <li
                                            className={styles.product}
                                            key={product._id}
                                        >
                                            <ProductCard product={product} />
                                        </li>
                                    )
                                )}
                            </ul>
                        )}
                        <Filters
                            visible={isFiltersVisible}
                            options={options}
                            setOptions={setOptions}
                        />
                    </div>
                </>
            )}
        </section>
    );
};

export default Goods;
