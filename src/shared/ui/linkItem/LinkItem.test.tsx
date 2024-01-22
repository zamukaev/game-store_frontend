import React from "react";
import { render } from "@testing-library/react";

import LinkItem, { Kind } from "./LinkItem";
describe("NavItem Component", () => {
    test("NavItem renders correctly", () => {
        const { container } = render(
            <LinkItem kind={Kind.EMAIL}>some text</LinkItem>
        );
        expect(container).toBeInTheDocument();
    });
    test("NavItem renders text correctly", () => {
        const { getByTestId } = render(
            <LinkItem kind={Kind.EMAIL}>some text</LinkItem>
        );
        expect(getByTestId("linkItem")).toHaveTextContent("some text");
    });
    test("NavItem renders with the class email", () => {
        const { getByTestId } = render(
            <LinkItem kind={Kind.EMAIL}>some text</LinkItem>
        );
        expect(getByTestId("linkItem")).toHaveClass("email");
    });
    test("NavItem renders with the class instagram", () => {
        const { getByTestId } = render(
            <LinkItem kind={Kind.INSTAGRAM}>some text</LinkItem>
        );
        expect(getByTestId("linkItem")).toHaveClass("instagram");
    });
    test("NavItem renders with the class phone", () => {
        const { getByTestId } = render(
            <LinkItem kind={Kind.PHONE}>some text</LinkItem>
        );
        expect(getByTestId("linkItem")).toHaveClass("phone");
    });
    test("NavItem renders with the class whatsapp", () => {
        const { getByTestId } = render(
            <LinkItem kind={Kind.WHATSAPP}>some text</LinkItem>
        );
        expect(getByTestId("linkItem")).toHaveClass("whatsapp");
    });
});
