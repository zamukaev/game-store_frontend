import { fireEvent, render, screen } from "@testing-library/react";

import SearchInput from "@/shared/ui/searchInput/SearchInput";

describe("searchInput component", () => {
    const handleSubmit = jest.fn();
    const handleInputChange = jest.fn();
    const searchQuery = "TestQuery";

    it("render searchInput", () => {
        render(
            <SearchInput
                handleSubmit={handleSubmit}
                placeholder="Поиск..."
                handleInputChange={handleInputChange}
                searchQuery={searchQuery}
            />
        );

        const formSearchInput = screen.getByTestId("searchInput");
        expect(formSearchInput).toBeInTheDocument();
    });

    it("check placeholder", () => {
        render(
            <SearchInput
                handleSubmit={handleSubmit}
                placeholder="Поиск..."
                handleInputChange={handleInputChange}
                searchQuery={searchQuery}
            />
        );

        const input = screen.getByPlaceholderText("Поиск...");
        expect(input).toBeInTheDocument();
    });

    it("onChange input", () => {
        render(
            <SearchInput
                handleSubmit={handleSubmit}
                placeholder="Поиск..."
                handleInputChange={handleInputChange}
                searchQuery={"TestValue"}
            />
        );

        const inputElement = screen.getByPlaceholderText("Поиск...");
        fireEvent.change(inputElement, { target: { value: "TestValue" } });

        // Проверяем, что введенное значение соответствует ожидаемому
        expect((inputElement as HTMLInputElement).value).toBe("TestValue");
    });
});
