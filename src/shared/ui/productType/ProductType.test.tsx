import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import Button from "./ProductType";
import ProductType from "./ProductType";

describe("ProductType Component", () => {
    it("render", () => {
        render(<ProductType kind="hit" />);
        const type = screen.getByTestId("productType");
        expect(type).toBeInTheDocument();
    });

    it("render hit", () => {
        render(<ProductType kind="hit" />);
        const type = screen.getByTestId("productType");
        expect(type.className).toEqual(expect.stringMatching(/.*\bhit\b.*/));
    });

    it("render discount", () => {
        render(<ProductType kind="discount" />);
        const type = screen.getByTestId("productType");
        expect(type.className).toEqual(
            expect.stringMatching(/.*\bdiscount\b.*/)
        );
    });
});
