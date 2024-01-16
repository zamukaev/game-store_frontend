import { render, screen, fireEvent } from "@testing-library/react";

import Sorting, { options } from "./Sorting";

describe("Sorting Component", () => {
    it("renders sorting component", () => {
        render(<Sorting />);
        const sorting = screen.getByTestId("sorting");

        expect(sorting).toBeInTheDocument();
    });
    it("renders sorting with opened class", () => {
        render(<Sorting />);
        const title = screen.getByTestId("title");

        fireEvent.click(title);
        expect(screen.getByRole("list")).toHaveClass("opened");
        fireEvent.click(title);
        expect(screen.getByRole("list")).not.toHaveClass("opened");
    });
    it("renders sorting with default selected item", () => {
        render(<Sorting />);
        const listItem = screen.getAllByTestId("list-item");
        expect(listItem[0]).toHaveClass("active");
    });
    it("renders sorting by click with class active item", () => {
        render(<Sorting />);
        const listItem = screen.getAllByTestId("list-item");
        fireEvent.click(listItem[1]);
        expect(listItem[1]).toHaveClass("active");
        fireEvent.click(listItem[2]);
        expect(listItem[2]).toHaveClass("active");
    });
});