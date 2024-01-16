import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import InputPrice from "./InputPrice";

const setup = () => {
    const utils = render(<InputPrice type="priceFrom" setValue={() => { }} placeholder="" />);
    const input = screen.getByLabelText("input-price") as HTMLInputElement;
    return {
        input,
        ...utils,
    };
};

describe("Input-price Component", () => {
    it("correct update value", async () => {
        const { input } = setup();

        fireEvent.change(input, { target: { value: 13 } });

        expect(input.value).toBe("13");
    });

    it("should not allow letters to be inputted", () => {
        const { input } = setup();

        expect(input.value).toBe("");
        fireEvent.change(input, { target: { value: "Good Day" } });
        expect(input.value).toBe("");
    });
});
