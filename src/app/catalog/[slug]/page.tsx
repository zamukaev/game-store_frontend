"use client";
import { Subcategories } from "@/widgets/subcategories";

const CategoryPage = ({ params }: { params: { slug: string } }) => {
    return <Subcategories title={params.slug} />;
};

export default CategoryPage;
