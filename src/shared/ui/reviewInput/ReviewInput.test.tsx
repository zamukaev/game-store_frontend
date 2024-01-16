import { fireEvent, render, screen } from "@testing-library/react";

import ReviewInput from "./ReviewInput";

describe("reviewInput component", () => {
    it("render reviewInput", () => {
        render(
            <ReviewInput label="Недостатки" placeholder="Что не понравилось" />
        );

        const formReviewInput = screen.getByTestId("reviewInput");
        expect(formReviewInput).toBeInTheDocument();
    });

    it("check placeholder", () => {
        render(
            <ReviewInput label="Недостатки" placeholder="Что не понравилось" />
        );

        const input = screen.getByPlaceholderText("Что не понравилось");
        expect(input).toBeInTheDocument();
    });

    it("onChange input", () => {
        render(
            <ReviewInput label="Недостатки" placeholder="Что не понравилось" />
        );

        const inputElement = screen.getByPlaceholderText("Что не понравилось");
        fireEvent.change(inputElement, { target: { value: "TestValue" } });

        // Проверяем, что введенное значение соответствует ожидаемому
        expect((inputElement as HTMLInputElement).value).toBe("TestValue");
    });
});
