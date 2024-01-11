import React from "react";
import { render, screen } from "@testing-library/react";

import ProductType, { ProductTypeTheme } from "./ProductType";

describe("ProductType Component", () => {
    it("renders with the Component correctly ", () => {
        const { container } = render(<ProductType>Hit</ProductType>);
        expect(container).toBeInTheDocument();
    });

    it("ProductType with the hit theme", () => {
        render(
            <ProductType href="" theme={ProductTypeTheme.HIT}>
                hit
            </ProductType>
        );
        expect(screen.getByTestId("product-type")).toHaveClass("hit");
    });

    it("ProductType with the promotion theme", () => {
        render(
            <ProductType href="" theme={ProductTypeTheme.PROMOTION}>
                hit
            </ProductType>
        );
        expect(screen.getByTestId("product-type")).toHaveClass("promotion");
    });
});
