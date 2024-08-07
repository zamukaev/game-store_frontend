import React from "react";
import { fireEvent, render } from "@testing-library/react";

import Rating from "./Rating";

describe("Rating Component", () => {
    test("renders the component with the correct rating", () => {
        const rating = 3;
        const { container } = render(
            <Rating rating={rating} onChange={() => {}} />
        );
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
        const rating = 3;
        const isEditable = true;
        const { container } = render(
            <Rating
                isEditable={isEditable}
                rating={rating}
                setRating={setRatingMock}
                onChange={() => {}}
            />
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
        const rating = 3;
        const isEditable = false;
        const { container } = render(
            <Rating
                isEditable={isEditable}
                rating={rating}
                setRating={setRatingMock}
                onChange={() => {}}
            />
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
