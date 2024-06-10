import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { useRouter } from "next/router";

import SearchInput from "@/shared/ui/searchInput/SearchInput";

jest.mock("next/router", () => ({
    useRouter: jest.fn(),
}));

describe("searchInput component", () => {
    const mockPush = jest.fn();

    beforeEach(() => {
        (useRouter as jest.Mock).mockReturnValue({
            push: mockPush,
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("render searchInput", () => {
        render(<SearchInput onSearch={() => {}} placeholder="Поиск..." />);

        const formSearchInput = screen.getByTestId("searchInput");
        expect(formSearchInput).toBeInTheDocument();
    });

    it("check placeholder", () => {
        render(<SearchInput onSearch={() => {}} placeholder="Поиск..." />);

        const input = screen.getByPlaceholderText("Поиск...");
        expect(input).toBeInTheDocument();
    });

    it("onChange input", () => {
        render(<SearchInput onSearch={() => {}} placeholder="Поиск..." />);

        const inputElement = screen.getByPlaceholderText("Поиск...");
        fireEvent.change(inputElement, { target: { value: "TestValue" } });

        // Проверяем, что введенное значение соответствует ожидаемому
        expect((inputElement as HTMLInputElement).value).toBe("TestValue");
    });

    it("submit form and router push", () => {
        const mockOnSearch = jest.fn();
        render(<SearchInput onSearch={mockOnSearch} placeholder="Поиск..." />);

        const input = screen.getByPlaceholderText("Поиск...");
        const form = screen.getByTestId("searchInput");

        fireEvent.change(input, { target: { value: "test query" } });
        fireEvent.submit(form);

        expect(mockOnSearch).toHaveBeenCalledWith("test query");
        expect(mockPush).toHaveBeenCalledWith("/test query");
    });
});
