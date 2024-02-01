import { Console, error } from "console";

import { render, screen, waitFor } from "@testing-library/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { getCategories } from "../api/getCategories";

import Categories from "./Categories";

jest.mock("../api/getCategories");

const mockCategories = [
    { _id: "1", title: "Category 1", originTitle: "category-1" },
    { _id: "2", title: "Category 2", originTitle: "category-2" },
    { _id: "3", title: "Category 3", originTitle: "category-3" },
];

describe("Categories Component", () => {
    beforeEach(() => {
        (getCategories as jest.Mock).mockReset();
    });

    test("renders loading state when data is being fetched", async () => {
        (getCategories as jest.Mock).mockImplementation(() => new Promise(() => { }));

        render(
            <QueryClientProvider client={new QueryClient()}>
                <Categories />
            </QueryClientProvider>
        );
        expect(screen.getByTestId("categories-loader")).toBeInTheDocument();
    });

    test("renders categories when data is available", async () => {
        (getCategories as jest.Mock).mockResolvedValue(mockCategories);
        render(
            <QueryClientProvider client={new QueryClient()}>
                <Categories />
            </QueryClientProvider>
        );
        await waitFor(() => {
            mockCategories.forEach((category) => {
                expect(screen.getByText(category.title)).toBeInTheDocument();
            });
        });
    });
    test("handles error when fetching data", async () => {
        // Mock the API call to reject with an error
        (getCategories as jest.Mock).mockRejectedValue(new Error("API Error"));

        render(
            <QueryClientProvider client={new QueryClient()}>
                <Categories />
            </QueryClientProvider>
        );

        // Wait for the error state to be rendered
        await waitFor(() => {
            expect(screen.getByTestId("categories-loader")).toBeInTheDocument();
        });
    });
});
