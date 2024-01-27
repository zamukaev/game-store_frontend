"use client";
import { FC } from "react";

import { useQuery } from "@tanstack/react-query";

import { getCategoryByTitle } from "../api";

import SubcategoriesLoader from "./subcategories/SubcategoriesLoader";
import Subcategories from "./subcategories/Subcategories";

interface SubcategoriesContentProps {
    params: { title: string };
}

const SubcategoriesContent: FC<SubcategoriesContentProps> = ({ params }) => {
    const { data, isLoading } = useQuery({
        queryKey: ["category"],
        queryFn: () => getCategoryByTitle(params.title),
    });

    return isLoading ? (
        <SubcategoriesLoader data-testid="subcategories-loader" />
    ) : (
        <Subcategories
            data-testid="subcategories"
            title={params.title}
            category={data}
        />
    );
};
export default SubcategoriesContent;
