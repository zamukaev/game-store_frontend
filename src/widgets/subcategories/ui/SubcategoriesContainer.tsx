"use client";
import { FC } from "react";

import { useQuery } from "@tanstack/react-query";

import { getCategoryByTitle } from "../api/getCategoryByTitle";

import SubcategoriesLoader from "./subcategories/SubcategoriesLoader";
import Subcategories from "./subcategories/Subcategories";


interface SubcategoriesContainerProps {
    params: { title: string };
}

const SubcategoriesContainer: FC<SubcategoriesContainerProps> = ({ params }) => {
    const {
        data,
        isLoading
    } = useQuery({
        queryKey: ["category"],
        queryFn: () => getCategoryByTitle(params.title),
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
