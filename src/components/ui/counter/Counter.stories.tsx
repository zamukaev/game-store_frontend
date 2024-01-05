import Counter from "./Counter";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Counter> = {
    component: Counter,
};
export default meta;

type Story = StoryObj<typeof Counter>;

export const DefaultCount: Story = {
    args: {
        initialCount: 0,
    },
};

export const CountWithValue: Story = {
    args: {
        initialCount: 5,
    },
};
