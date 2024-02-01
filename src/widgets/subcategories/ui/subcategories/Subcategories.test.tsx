import { render, screen, } from "@testing-library/react";

import Subcategories from "./Subcategories";

const mockCategory = {
    _id: "65aee9edd994f62aafc45eb1",
    title: "Комплектующие для ПК",
    originTitle: "komplektuyushie-dly-pk",
    urlImg: "",
    subcategories: [
        {
            _id: "sdf3",
            title: "Материнская плата",
            originTitle: "materinskie-plati",
            urlImg: ""
        },
        {
            _id: "s2f3",
            title: "Материнская плата",
            originTitle: "materinskie-plati",
            urlImg: ""
        },
    ]
};

describe("Subcategories Component", () => {
    test("renders category title and subcategories", () => {
        const { container } = render(<Subcategories category={mockCategory} />);
        const categoryTitle = screen.getByTestId("category-title");
        expect(container).toBeInTheDocument();
        expect(categoryTitle).toBeInTheDocument();

        mockCategory.subcategories.forEach((subcategory) => {
            const subcategoryText = screen.getAllByText(subcategory.title);
            subcategoryText.forEach(title => {
                expect(title).toBeInTheDocument();
            });
        });
    });
    test("renders SubcategoriesEmpty when no subcategories", () => {
        render(<Subcategories category={{ ...mockCategory, subcategories: [] }} />);
        const subcategoriesEmpty = screen.getByTestId("subcategories-empty");
        expect(subcategoriesEmpty).toBeInTheDocument();
    });
});