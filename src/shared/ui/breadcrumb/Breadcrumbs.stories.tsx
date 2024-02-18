
import Breadcrumbs from "./Breadcrumbs";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Breadcrumbs> = {
    component: Breadcrumbs,
};
export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
    render: () => (
        <Breadcrumbs />
    ),
};
export const Category: Story = {
    render: () => (
        <Breadcrumbs crumb="Комплектующие для ПК" />
    ),
};
export const Subcategory: Story = {
    render: () => (
        <Breadcrumbs crumb="Материнские платы" />
    ),
};