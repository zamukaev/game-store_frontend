import ReviewInput from "./ReviewInput";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ReviewInput> = {
    component: ReviewInput,
};
export default meta;

type Story = StoryObj<typeof ReviewInput>;

export const Default: Story = {
    render: () => (
        <ReviewInput label="Недостатки" placeholder="Что не понравилось" />
    ),
};
