import { render } from "@testing-library/react";

import { useParams } from "next/navigation";

import { SubcategoryCard } from "..";

jest.mock("next/navigation");

const MockedUseParams = useParams as jest.MockedFunction<typeof useParams>;

describe("category card to be in the Document", () => {
    test("card renders", () => {
        MockedUseParams.mockReturnValue({ slug: "title" });
        const { container } = render(
            <SubcategoryCard
                title="category"
                image=""
                text="some text"
                alt="some text"
            />
        );
        expect(container).toBeInTheDocument();
    });
});
