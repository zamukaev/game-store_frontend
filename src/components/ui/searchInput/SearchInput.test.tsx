import { fireEvent, render, screen } from "@testing-library/react";

import SearchInput from "@/components/ui/searchInput/SearchInput";

describe("searchInput component", () => {
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
});
