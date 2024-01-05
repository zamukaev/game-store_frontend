import React from "react";
import { screen, render } from "@testing-library/react";

import RadioButton from "./RadioButton";
describe("RadioButton Component", () => {
    test("RadioButton renders correctly", () => {
        const { container } = render(
            <RadioButton id="1" text="hello" name="name" value="hello" />
        );
        expect(container).toBeInTheDocument();
    });
    test("RadioButton renders text correctly", () => {
        render(
            <RadioButton
                id="1"
                text="hello"
                checked
                role="radio"
                name="name"
                value="hello"
            />
        );
        const radioBtn = screen.getByRole("radio");
        expect(screen.getByTestId("title")).toHaveTextContent("hello");
        expect(radioBtn).toBeChecked();
    });
});
