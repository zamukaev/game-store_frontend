import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import Counter from "./Counter";

describe("Counter Component", () => {
    it("renders the Counter component with initial count", () => {
        const { getByTestId } = render(<Counter initialCount={0} />);
        const counter = getByTestId("counter");
        expect(counter).toBeInTheDocument();
    });

    it("render a counter with value of 1", () => {
        render(<Counter initialCount={5} />);

        const value = screen.getByTestId("value-title");

        expect(value).toHaveTextContent("5");
    });

    it("increment count", () => {
        render(<Counter initialCount={1} />);

        const value = screen.getByTestId("value-title");
        const incrementButton = screen.getByTestId("increment");

        fireEvent.click(incrementButton);

        expect(value).toHaveTextContent("2");
    });

    it("decrement count", () => {
        render(<Counter initialCount={3} />);

        const value = screen.getByTestId("value-title");
        const decrementButton = screen.getByTestId("decrement");

        fireEvent.click(decrementButton);

        expect(value).toHaveTextContent("2");
    });

    it("absolute count", () => {
        render(<Counter initialCount={0} />);

        const value = screen.getByTestId("value-title");
        const decrementButton = screen.getByTestId("decrement");

        fireEvent.click(decrementButton);

        expect(value).toHaveTextContent("0");
    });
});
