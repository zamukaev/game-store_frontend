import { render } from "@testing-library/react";

import { SubcategoryCard } from "..";

describe("category card to be in the Document", () => {
    test("card renders", () => {
        const { container } = render(
            <SubcategoryCard image="" text="some text" alt="some text" />
        );
        expect(container).toBeInTheDocument();
    });
});
