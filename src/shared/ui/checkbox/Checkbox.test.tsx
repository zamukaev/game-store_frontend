import React from "react";
import { render } from "@testing-library/react";

import Checkbox from "@/shared/ui/checkbox/Checkbox";

describe("Checkbox Component", () => {
    test("Checkbox renders correctly", () => {
        const { container } = render(<Checkbox />);
        expect(container).toBeInTheDocument();
    });
});
