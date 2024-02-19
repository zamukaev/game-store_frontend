"use client";
import { FC } from "react";

import { useQuery } from "@tanstack/react-query";

import { SubcategoriesLoader } from "@/shared/ui";

import { getCategoryByTitle } from "../api/getCategoryByTitle";

import Subcategories from "./subcategories/Subcategories";

interface SubcategoriesContainerProps {
    title: string;
}

const SubcategoriesContainer: FC<SubcategoriesContainerProps> = ({ title }) => {
    const {
        data,
        isLoading
    } = useQuery({
        queryKey: ["category"],
        queryFn: () => getCategoryByTitle(title),
    });

    return isLoading ? (
        <SubcategoriesLoader data-testid="subcategories-loader" />
    ) : (
        <Subcategories
            category={data}
        />
    );
};
export default SubcategoriesContainer;
