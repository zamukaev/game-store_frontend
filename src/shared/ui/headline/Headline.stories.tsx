import { Headline, HeadlineSize } from "..";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Headline> = {
    component: Headline,
};
export default meta;

type Story = StoryObj<typeof Headline>;

export const H1: Story = {
    render: () => (
        <Headline Size={HeadlineSize.L}>
            some text
        </Headline>
    ),
};

export const H2: Story = {
    render: () => (
        <Headline Size={HeadlineSize.M}>
            some text
        </Headline>
    ),
};
export const H3: Story = {
    render: () => (
        <Headline Size={HeadlineSize.S}>
            some text
        </Headline>
    ),
};
