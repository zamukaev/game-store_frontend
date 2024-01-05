
import { render, screen } from "@testing-library/react";

import Card from "./Card";

describe("Card Component", () => {
    it("to be in the document", () => {
        render(<Card />);
        expect(screen.getByTestId("card")).toBeInTheDocument();
    });
});