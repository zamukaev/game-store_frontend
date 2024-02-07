"use client";
import { FC } from "react";

import { SubcategoriesContainer } from "@/widgets/subcategories";

interface SubcategoriesPageProps {
    title: string;
}

const SubcategoriesPage: FC<SubcategoriesPageProps> = ({ title }) => {
    return <SubcategoriesContainer title={title} />;
};

export default SubcategoriesPage;