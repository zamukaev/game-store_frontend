import React, { useState } from "react";
import { fireEvent, render } from "@testing-library/react";

import Rating from "./Rating";
describe("Rating Component", () => {
    test("renders the component with the correct rating", () => {
        const { container } = render(<Rating rating={3} />);
        const stars = container.querySelectorAll(".star");

        expect(stars.length).toBe(5);
        expect(stars[0]).toHaveClass("filled");
        expect(stars[1]).toHaveClass("filled");
        expect(stars[2]).toHaveClass("filled");
        expect(stars[3]).not.toHaveClass("filled");
        expect(stars[4]).not.toHaveClass("filled");
    });

    test("allows editing when isEditable is true", () => {
        const setRatingMock = jest.fn();
        const { container } = render(
            <Rating isEditable={true} rating={3} setRating={setRatingMock} />
        );
        const stars = container.querySelectorAll(".star");

        fireEvent.mouseEnter(stars[2]);
        expect(stars[0]).toHaveClass("filled");
        expect(stars[1]).toHaveClass("filled");
        expect(stars[2]).toHaveClass("filled");
        expect(stars[3]).not.toHaveClass("filled");
        expect(stars[4]).not.toHaveClass("filled");

        fireEvent.click(stars[4]);
        expect(setRatingMock).toHaveBeenCalledWith(5);
    });

    test("does not allow editing when isEditable is false", () => {
        const setRatingMock = jest.fn();
        const { container } = render(
            <Rating isEditable={false} rating={3} setRating={setRatingMock} />
        );
        const stars = container.querySelectorAll(".star");

        fireEvent.mouseEnter(stars[2]);
        expect(stars[0]).toHaveClass("filled");
        expect(stars[1]).toHaveClass("filled");
        expect(stars[2]).toHaveClass("filled");
        expect(stars[3]).not.toHaveClass("filled");
        expect(stars[4]).not.toHaveClass("filled");

        fireEvent.click(stars[4]);
        expect(setRatingMock).not.toHaveBeenCalled();
    });
});
