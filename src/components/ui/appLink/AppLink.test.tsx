import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import AppLink, { AppLinkTheme } from "./AppLink";

describe("AppLink Component", () => {
    it("renders with the correct label", () => {
        render(<AppLink href="">Click me</AppLink>);
        const button = screen.getByText("Click me");
        expect(button).toBeInTheDocument();
    });

    it("AppLink with the default theme", () => {
        render(
            <AppLink href="" theme={AppLinkTheme.DEFAULT}>
                some text
            </AppLink>
        );
        expect(screen.getByText("some text")).toHaveClass("default");
    });

    it("AppLink with the primary theme", () => {
        render(
            <AppLink href="" theme={AppLinkTheme.PRIMARY}>
                some text
            </AppLink>
        );
        expect(screen.getByText("some text")).toHaveClass("primary");
    });

    it("AppLink with the secondary theme", () => {
        render(
            <AppLink href="" theme={AppLinkTheme.SECONDARY}>
                some text
            </AppLink>
        );
        expect(screen.getByText("some text")).toHaveClass("secondary");
    });

    it("calls onClick callback when the AppLink is clicked", () => {
        const onClickMock = jest.fn();
        render(
            <AppLink href="" onClick={onClickMock}>
                some text
            </AppLink>
        );
        const link = screen.getByText("some text");
        fireEvent.click(link);
        expect(onClickMock).toHaveBeenCalled();
    });
});
