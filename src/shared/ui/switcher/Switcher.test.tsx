import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";

import Switcher from "./Switcher";

describe("Switcher Component", () => {
    test("Switcher renders correctly", () => {
        const { container } = render(<Switcher />);
        expect(container).toBeInTheDocument();
    });
    test("Switcher is Toggled", () => {
        render(<Switcher role="checkbox" />);
        const switcher = screen.getByRole("checkbox");
        fireEvent.change(switcher, { target: { checked: true } });
        expect(switcher).toBeChecked();
    });
    test("Switcher is UnToggled", () => {
        render(<Switcher role="checkbox" />);
        const switcher = screen.getByRole("checkbox");
        fireEvent.change(switcher, { target: { checked: false } });
        expect(switcher).not.toBeChecked();
    });
});
