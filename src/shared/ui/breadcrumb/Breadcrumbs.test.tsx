import React from "react";
import { render } from "@testing-library/react";

import Breadcrumbs from "./Breadcrumbs";

describe("Breadcrumbs Component", () => {
    it("renders breadcrumbs correctly with default props", () => {
        const { getByText } = render(<Breadcrumbs />);

        expect(getByText("Главная")).toBeInTheDocument();
        expect(getByText("Каталог")).toBeInTheDocument();
    });

    it("renders breadcrumbs with additional crumb", () => {
        const { getByText } = render(<Breadcrumbs crumb="Additional Crumb" />);

        expect(getByText("Главная")).toBeInTheDocument();
        expect(getByText("Каталог")).toBeInTheDocument();
        expect(getByText("Additional Crumb")).toBeInTheDocument();
    });

    it("checks if breadcrumbs have correct hrefs", () => {
        const { getByText } = render(<Breadcrumbs crumb="Additional Crumb" />);

        const homeBreadcrumb = getByText("Главная");
        const catalogBreadcrumb = getByText("Каталог");

        expect(homeBreadcrumb.getAttribute("href")).toBe("/");
        expect(catalogBreadcrumb.getAttribute("href")).toBe("/catalog");
    });
});
