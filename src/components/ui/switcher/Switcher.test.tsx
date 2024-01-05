import React from "react";
import { screen, render } from "@testing-library/react";

import Switcher from "./Switcher";
describe("Switcher Component", () => {
    test("Switcher renders correctly", () => {
        const { container } = render(
            <Switcher />
        );
        expect(container).toBeInTheDocument();
    });
    test("Switcher is Toggled", () => {
        render(
            <Switcher role="checkbox" isToggled={true} />
        );
        const switcher = screen.getByRole("checkbox");
        expect(switcher).toBeChecked();
    });
    test("Switcher is UnToggled", () => {
        render(
            <Switcher role="checkbox" isToggled={false} />
        );
        const switcher = screen.getByRole("checkbox");
        expect(switcher).not.toBeChecked();
    });
});
