import React, { FC } from "react";

import { Product } from "@/widgets/product";

interface ProductPageParams {
    params: {
        id: string;
    };
}

const ProductPage: FC<ProductPageParams> = ({ params }) => {
    return <Product id={params.id} />;
};

export default ProductPage;
