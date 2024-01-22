import { HTag, Headline, HeadlineSize } from "..";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Headline> = {
    component: Headline,
};
export default meta;

type Story = StoryObj<typeof Headline>;

export const H1: Story = {
    render: () => (
        <Headline size={HeadlineSize.L} H={HTag.H1}>
            some text
        </Headline>
    ),
};

export const H2: Story = {
    render: () => (
        <Headline size={HeadlineSize.M} H={HTag.H2}>
            some text
        </Headline>
    ),
};
export const H3: Story = {
    render: () => (
        <Headline size={HeadlineSize.M} H={HTag.H3}>
            some text
        </Headline>
    ),
};
