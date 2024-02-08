"use client";
import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { OptionsType } from "@/configs/options";

import { Headline, HeadlineSize, ProductCard, ProductsPageLoader, SubcategoriesEmpty } from "@/shared/ui";
import { Sorting } from "@/features/sorting";
import { Filters } from "@/features/filters";
import { Product } from "@/shared/types/product";

import { getProductsBySubcategory } from "@/app/api/getProductsBySubcategory";

import styles from "./styles.module.scss";

const Products = ({ params }: { params: { title: string } }) => {

    const [selectedValue, setSelectedValue] = useState("popular");
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
        inStock: options.inStock.toString()
    });

    const {
        data: products,
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
    }, [options, refetch]);

    return (
        <section className={styles.content}>
            {
                isLoading
                    ? <ProductsPageLoader />
                    : <>
                        {!!products?.length ?
                            <>
                                <Headline Size={HeadlineSize.L} className={styles.title}>
                                    {products[0].category}
                                </Headline>
                                <Sorting className={styles.sorting} setSelectedValue={setSelectedValue} />
                                <div className={styles.container}>
                                    <ul className={styles.products}>
                                        {products?.map((product: Product) => (
                                            <li
                                                className={styles.product}
                                                key={product._id}
                                            >
                                                <ProductCard product={product} />
                                            </li>
                                        ))}
                                    </ul>
                                    <Filters options={options} setOptions={setOptions} />
                                </div>
                            </>
                            : <SubcategoriesEmpty className={styles.empty} />
                        }
                    </>
            }
        </section>
    );
};

export default Products;