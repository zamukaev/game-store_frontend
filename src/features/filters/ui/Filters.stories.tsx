import { OptionsType } from "@/configs/options";

import Filters from "./Filters";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Filters> = {
    component: Filters,
};
export default meta;

type Story = StoryObj<typeof Filters>;

const options: OptionsType = {
    priceFrom: 0,
    priceTo: 100000,
    hits: false,
    promotion: false,
    inStock: false,
};
export const Default: Story = {
    render: () => <Filters options={options} setOptions={() => {}} />,
};
