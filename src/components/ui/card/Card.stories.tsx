import Card from "./Card";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
    component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

export const DefaultCard: Story = {
    render: () => <Card />,
};
