"use client";
import { SubcategoriesContainer } from "@/widgets/subcategories";

const CategoryPage = ({ params }: { params: { slug: string } }) => {

    return <SubcategoriesContainer title={params.slug} />;
};

export default CategoryPage;
