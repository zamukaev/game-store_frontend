import Skeleton from "./Skeleton";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "shared/Skeleton",
    component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        width: "100%",
        height: 200,
    },
};

export const Circle: Story = {
    args: {
        width: 100,
        height: 100,
        border: "100%",
    },
};
