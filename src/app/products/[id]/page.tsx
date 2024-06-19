import { Product } from "@/widgets/product";
import React, { FC } from "react";

interface ProductPageParams {
    params: {
        id: string;
    };
}

const ProductPage: FC<ProductPageParams> = ({ params }) => {
    return <Product id={params.id} />;
};

export default ProductPage;
