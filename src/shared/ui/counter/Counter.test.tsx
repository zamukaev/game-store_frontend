/* eslint-disable react/display-name */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import Counter from "./Counter";

// Mock icons to avoid issues with icon imports
jest.mock("@/shared/icons/minus/MinusIcon", () => () => (
    <svg data-testid="minus-icon" />
));
jest.mock("@/shared/icons/plus/PlusIcon", () => () => (
    <svg data-testid="plus-icon" />
));

describe("Counter Component", () => {
    it("renders the Counter component with initial count", () => {
        const { getByTestId } = render(<Counter count={0} />);
        const counter = getByTestId("counter");
        expect(counter).toBeInTheDocument();
    });

    it("renders a counter with the correct initial value", () => {
        const increment = jest.fn();
        render(<Counter count={1} increment={increment} />);

        const value = screen.getByTestId("value-title");
        expect(value).toHaveTextContent("1");
    });

    it("calls increment function when increment button is clicked", () => {
        const increment = jest.fn();
        render(<Counter count={1} increment={increment} />);

        const incrementButton = screen.getByTestId("increment");
        fireEvent.click(incrementButton);

        expect(increment).toHaveBeenCalledTimes(1);
    });

    it("calls decrement function when decrement button is clicked", () => {
        const decrement = jest.fn();
        render(<Counter count={3} decrement={decrement} />);

        const decrementButton = screen.getByTestId("decrement");
        fireEvent.click(decrementButton);

        expect(decrement).toHaveBeenCalledTimes(1);
    });
});
