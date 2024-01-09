import React from "react";
import { render } from "@testing-library/react";

import LinkItem, { Kind } from "./LinkItem";
describe("NavItem Component", () => {
    test("NavItem renders correctly", () => {
        const { container } = render(
            <LinkItem kind={Kind.EMAIL} text="some text" />
        );
        expect(container).toBeInTheDocument();
    });
    test("NavItem renders text correctly", () => {
        const { getByTestId } = render(
            <LinkItem kind={Kind.EMAIL} text="some text" />
        );
        expect(getByTestId("linkItem")).toHaveTextContent("some text");
    });
    test("NavItem renders with the class email", () => {
        const { getByTestId } = render(
            <LinkItem kind={Kind.EMAIL} text="some text" />
        );
        expect(getByTestId("linkItem")).toHaveClass("email");
    });
    test("NavItem renders with the class instagram", () => {
        const { getByTestId } = render(
            <LinkItem kind={Kind.INSTAGRAM} text="some text" />
        );
        expect(getByTestId("linkItem")).toHaveClass("instagram");
    });
    test("NavItem renders with the class telefon", () => {
        const { getByTestId } = render(
            <LinkItem kind={Kind.TELEFON} text="some text" />
        );
        expect(getByTestId("linkItem")).toHaveClass("telefon");
    });
    test("NavItem renders with the class whatsapp", () => {
        const { getByTestId } = render(
            <LinkItem kind={Kind.WHATSAPP} text="some text" />
        );
        expect(getByTestId("linkItem")).toHaveClass("whatsapp");
    });
});
