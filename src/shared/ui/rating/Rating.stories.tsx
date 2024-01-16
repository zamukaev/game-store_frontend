import Rating from "./Rating";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Rating> = {
    component: Rating,
};
export default meta;

type Story = StoryObj<typeof Rating>;

export const RatingEmpty: Story = {
    render: () => <Rating rating={0} />,
};

export const RatingThreePoints: Story = {
    render: () => <Rating rating={3} />,
};

export const RatingFivePoints: Story = {
    render: () => <Rating rating={5} />,
};
