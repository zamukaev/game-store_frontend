import React from "react";
import { render, screen } from "@testing-library/react";

import { HTag, Headline, HeadlineSize } from "..";

describe("Headline Component", () => {
    test("Headline renders correctly", () => {
        const { container } = render(<Headline>Some text</Headline>);
        expect(container).toBeInTheDocument();
    });
    test("Headline renders correctly with the class l", () => {
        render(
            <Headline H={HTag.H2} size={HeadlineSize.L}>
                Some text
            </Headline>
        );
        const title = screen.getByTestId("title");
        expect(title).toHaveClass("l");
    });
    test("Headline renders correctly with the class m", () => {
        render(
            <Headline H={HTag.H3} size={HeadlineSize.M}>
                Some text
            </Headline>
        );
        const title = screen.getByTestId("title");
        expect(title).toHaveClass("m");
    });
});
