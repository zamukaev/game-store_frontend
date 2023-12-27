import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button Component", () => {
    it("renders with the correct label", () => {
        render(<Button>Click me</Button>);
        const button = screen.getByText("Click me");
        expect(button).toBeInTheDocument();
    });

    it("applies the 'gray' style when kind is set to 'gray'", () => {
        render(<Button kind="gray">Gray Button</Button>);
        expect(screen.getByText("Gray Button")).toHaveClass("gray");
    });

    it("applies the 'cart' style when kind is set to 'cart'", () => {
        render(<Button kind="cart">Cart Button</Button>);
        expect(screen.getByText("Cart Button")).toHaveClass("cart");
    });

    it("applies the 'small' style when kind is set to 'small'", () => {
        render(<Button kind="small">Small Button</Button>);
        expect(screen.getByText("Small Button")).toHaveClass("small");
    });

    it("calls onClick callback when the button is clicked", () => {
        const onClickMock = jest.fn();
        render(<Button onClick={onClickMock}>Click me</Button>);
        const button = screen.getByText("Click me");
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalled();
    });
});
