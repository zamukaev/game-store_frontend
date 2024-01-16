import Scores from "./Scores";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Scores> = {
    component: Scores,
};
export default meta;

type Story = StoryObj<typeof Scores>;

export const RatingEmpty: Story = {
    render: () => <Scores rating={0} />,
};

export const RatingThreePoints: Story = {
    render: () => <Scores rating={3} />,
};

export const RatingFivePoints: Story = {
    render: () => <Scores rating={5} />,
};
