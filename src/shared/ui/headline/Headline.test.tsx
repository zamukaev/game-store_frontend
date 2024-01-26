import React from "react";
import { render, screen } from "@testing-library/react";

import { Headline, HeadlineSize } from "..";

describe("Headline Component", () => {
    test("Headline renders correctly", () => {
        const { container } = render(<Headline>Some text</Headline>);
        expect(container).toBeInTheDocument();
    });
    test("Headline renders correctly with the class h1", () => {
        render(<Headline Size={HeadlineSize.L}>Some text</Headline>);
        const title = screen.getByTestId("title");
        expect(title).toHaveClass("h1");
    });
    test("Headline renders correctly with the class h2", () => {
        render(<Headline Size={HeadlineSize.M}>Some text</Headline>);
        const title = screen.getByTestId("title");
        expect(title).toHaveClass("h2");
    });
});
