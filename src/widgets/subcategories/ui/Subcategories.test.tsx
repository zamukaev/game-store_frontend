import { render, screen, waitFor } from "@testing-library/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Category } from "@/shared/types/categories";

import { Subcategories } from "..";
import { getCategoryByTitle } from "../api/getCategoryByTitle";

const mockCategory: Category = {
    _id: "65aee9edd994f62aafc45eb1",
    title: "Комплектующие для ПК",
    originTitle: "komplektuyushie-dly-pk",
    urlImg: "",
    subcategories: [
        {
            _id: "sdf3",
            title: "Материнская плата",
            originTitle: "materinskie-plati",
            urlImg: "",
        },
        {
            _id: "s2f3",
            title: "Материнская плата",
            originTitle: "materinskie-plati",
            urlImg: "",
        },
    ],
};
jest.mock("../api/getCategoryByTitle");
describe("Subcategories Component", () => {
    beforeEach(() => {
        (getCategoryByTitle as jest.Mock).mockReset();
    });

    test("renders category title and subcategories", async () => {
        (getCategoryByTitle as jest.Mock).mockResolvedValue(mockCategory);

        const { container } = render(
            <QueryClientProvider client={new QueryClient()}>
                <Subcategories title={mockCategory.originTitle} />
            </QueryClientProvider>
        );

        expect(container).toBeInTheDocument();

        mockCategory.subcategories.forEach(async (subcategory) => {
            await waitFor(() => {
                const subcategoryText = screen.getAllByText(subcategory.title);
                subcategoryText.forEach((title) => {
                    expect(title).toBeInTheDocument();
                });
            });
        });
    });

    test("renders SubcategoriesEmpty when no subcategories", async () => {
        (getCategoryByTitle as jest.Mock).mockResolvedValue({
            subcategories: [],
        });
        render(
            <QueryClientProvider client={new QueryClient()}>
                <Subcategories title={mockCategory.title} />
            </QueryClientProvider>
        );

        await waitFor(() => {
            expect(
                screen.getByTestId("subcategories-empty")
            ).toBeInTheDocument();
        });
    });
});
