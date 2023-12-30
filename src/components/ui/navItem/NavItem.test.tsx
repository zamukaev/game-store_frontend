import React from "react";
import { fireEvent, render } from "@testing-library/react";

import { NavItem } from "./NavItem";
describe("NavItem Component", () => {
    test("NavItem renders correctly", () => {
        const { container } = render(<NavItem kind="cart" />);
        expect(container).toBeInTheDocument();
    });
    test("NavItem renders text correctly", () => {
        const { getByText } = render(<NavItem kind="login" text="Login" />);
        expect(getByText("Login")).toBeInTheDocument();
    });
    test("NavItem onClick handler is called", () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<NavItem kind="favorites" text="Favorites" onClick={onClickMock} />);

        fireEvent.click(getByText("Favorites"));

        expect(onClickMock).toHaveBeenCalled();
    });
});