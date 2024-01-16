import Filters from "./Filters";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Filters> = {
    component: Filters,
};
export default meta;

type Story = StoryObj<typeof Filters>;

export const Default: Story = {
    render: () => <Filters />,
};
