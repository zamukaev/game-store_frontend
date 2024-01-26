import Sorting from "./Sorting";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Sorting> = {
    component: Sorting,
};
export default meta;

type Story = StoryObj<typeof Sorting>;

export const Closed: Story = {
    render: () => <Sorting />,
};

export const Opened: Story = {
    render: () => <Sorting />,
};
