import React from "react";
import { fireEvent, render } from "@testing-library/react";

import Scores from "./Scores";
describe("Rating Component", () => {
    test("renders the component with the correct rating", () => {
        const { container } = render(<Scores rating={3} />);
        const stars = container.querySelectorAll(".item");

        expect(stars.length).toBe(5);
        expect(stars[0]).toHaveClass("filled");
        expect(stars[1]).toHaveClass("filled");
        expect(stars[2]).toHaveClass("filled");
        expect(stars[3]).not.toHaveClass("filled");
        expect(stars[4]).not.toHaveClass("filled");
    });
});
