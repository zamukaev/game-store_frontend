import { fireEvent, render, screen } from "@testing-library/react";

import UserInput from "./UserInput";

describe("userInput component", () => {
    it("render userInput", () => {
        render(<UserInput kind="password" value="" onChange={() => {}} />);

        const userInput = screen.getByTestId("userInput");
        expect(userInput).toBeInTheDocument();
    });

    it("onChange input", () => {
        render(<UserInput kind="password" value="" onChange={() => {}} />);

        const userInput = screen.getByTestId("userInput");
        fireEvent.change(userInput, { target: { value: "TestValue" } });

        // Проверяем, что введенное значение соответствует ожидаемому
        expect((userInput as HTMLInputElement).value).toBe("TestValue");
    });
});
