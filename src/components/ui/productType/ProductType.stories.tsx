import ProductType, { ProductTypeTheme } from "./ProductType";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProductType> = {
    component: ProductType,
};
export default meta;

type Story = StoryObj<typeof ProductType>;

export const Hit: Story = {
    render: () => <ProductType theme={ProductTypeTheme.HIT}>HIT</ProductType>,
};

export const Promotion: Story = {
    render: () => (
        <ProductType theme={ProductTypeTheme.PROMOTION}>PROMOTION</ProductType>
    ),
};
