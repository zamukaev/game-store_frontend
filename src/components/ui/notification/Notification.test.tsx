import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Notification, { NotificationTheme } from "./Notification";

describe("Notification Component", () => {
    it("renders the Notification component with success theme", () => {
        render(<Notification theme={NotificationTheme.SUCCESSFUL} />);
        const notification = screen.getByTestId("notification");
        expect(notification).toHaveClass("success");
    });

    it("renders the Notification component with failed theme", () => {
        render(<Notification theme={NotificationTheme.FAILED} />);
        const notification = screen.getByTestId("notification");
        expect(notification).toHaveClass("failed");
    });

    it("renders the Notification component with default theme (successful)", () => {
        render(<Notification />);
        const notification = screen.getByTestId("notification");
        expect(notification).toHaveClass("success");
    });

    it("calls setVisible with false when the close button is clicked", () => {
        const setVisibleMock = jest.fn();
        render(<Notification visible={true} setVisible={setVisibleMock} />);
        const closeButton = screen.getByTestId("close-btn");

        fireEvent.click(closeButton);

        expect(setVisibleMock).toHaveBeenCalledWith(false);
    });

    it("renders children inside the Notification component", () => {
        render(<Notification>Custom Notification Text</Notification>);
        const notification = screen.getByTestId("notification");
        expect(notification).toHaveTextContent("Custom Notification Text");
    });

    it("adds custom class to the Notification component", () => {
        render(<Notification className="custom-class" />);
        const notification = screen.getByTestId("notification");
        expect(notification).toHaveClass("custom-class");
    });

    it("adds visible class when the 'visible' prop is true", () => {
        render(<Notification visible={true} />);
        const notification = screen.getByTestId("notification");
        expect(notification).toHaveClass("visible");
    });

    it("does not add visible class when the 'visible' prop is false", () => {
        render(<Notification visible={false} />);
        const notification = screen.getByTestId("notification");
        expect(notification).not.toHaveClass("visible");
    });
});
