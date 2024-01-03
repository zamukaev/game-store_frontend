import React from "react";
import { render } from "@testing-library/react";

import Counter from "./Counter";

describe("Counter Component", () => {
    it("renders the Counter component with initial count", () => {
        const { getByTestId } = render(
            <Counter count={0} setCount={() => {}} />
        );
        const counter = getByTestId("counter");
        expect(counter).toBeInTheDocument();
    });
});
