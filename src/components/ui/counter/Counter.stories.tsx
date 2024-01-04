import CartIcon from "@/components/shared/icons/cartIcon/CartIcon";

import Counter from "./Counter";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Counter> = {
    component: Counter,
};
export default meta;

type Story = StoryObj<typeof Counter>;

export const DefaultCount: Story = {
    args: {
        count: 0,
    },
};

export const CountWithValue: Story = {
    args: {
        count: 5,
    },
};
