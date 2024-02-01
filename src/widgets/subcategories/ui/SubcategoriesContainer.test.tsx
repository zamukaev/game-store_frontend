import { render, screen, waitFor } from "@testing-library/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { getCategoryByTitle } from "../api/getCategoryByTitle";
import { SubcategoriesContainer } from "..";

jest.mock("../api/getCategoryByTitle");

const mockCategory = {
    _id: "65aee9edd994f62aafc45eb1",
    title: "Комплектующие для ПК",
    originTitle: "komplektuyushie-dly-pk",
    urlImg: "",
    subcategories: [
        {
            _id: "3f5",
            title: "Материнская плата",
            originTitle: "materinskie-plati",
            urlImg: ""
        },
        {
            _id: "3f5wr",
            title: "Материнская плата",
            originTitle: "materinskie-plati",
            urlImg: ""
        },
    ]
};

describe("Categories Component", () => {
    beforeEach(() => {
        (getCategoryByTitle as jest.Mock).mockReset();
    });

    test("renders loading state when data is being fetched", async () => {
        (getCategoryByTitle as jest.Mock).mockImplementation(() => new Promise(() => { }));
        render(
            <QueryClientProvider client={new QueryClient()}>
                <SubcategoriesContainer params={{
                    title: mockCategory.originTitle
                }} />
            </QueryClientProvider>
        );
        expect(screen.getByTestId("subcategories-loader")).toBeInTheDocument();
    });

    test("renders categories when data is available", async () => {
        (getCategoryByTitle as jest.Mock).mockResolvedValue(mockCategory);
        render(
            <QueryClientProvider client={new QueryClient()}>
                <SubcategoriesContainer params={{
                    title: mockCategory.originTitle
                }}
                />
            </QueryClientProvider>
        );
        await waitFor(() => {
            expect(screen.getByTestId("subcategories")).toBeInTheDocument();
        });
    });
    test("handles error when fetching data", async () => {
        (getCategoryByTitle as jest.Mock).mockRejectedValue(new Error("API Error"));

        render(
            <QueryClientProvider client={new QueryClient()}>
                <SubcategoriesContainer params={{
                    title: mockCategory.originTitle
                }} />
            </QueryClientProvider>
        );
        await waitFor(() => {
            expect(screen.getByTestId("subcategories-loader")).toBeInTheDocument();
        });
    });
});
