import React from "react";
import { render } from "@testing-library/react";

import RadioGroup from "./RadioGroup";
describe("RadioGroup Component", () => {
    test("RadioGroup renders correctly", () => {
        const { container } = render(<RadioGroup />);
        expect(container).toBeInTheDocument();
    });
});
