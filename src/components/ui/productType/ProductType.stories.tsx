import ProductType from "./ProductType";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProductType> = {
    component: ProductType,
};
export default meta;

type Story = StoryObj<typeof ProductType>;

export const Hit: Story = {
    render: () => <ProductType kind="hit" />,
};

export const Discount: Story = {
    render: () => <ProductType kind="discount" />,
};
