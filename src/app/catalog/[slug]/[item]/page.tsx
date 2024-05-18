"use client";
import { Goods } from "@/widgets/goods";

const Products = ({ params }: { params: { slug: string; item: string } }) => {
    return <Goods slug={params.slug} item={params.item} />;
};

export default Products;
