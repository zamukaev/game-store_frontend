import { GoBackButton } from "..";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof GoBackButton> = {
    component: GoBackButton,
};
export default meta;

type Story = StoryObj<typeof GoBackButton>;

export const Primary: Story = {
    render: () => <GoBackButton text="go To Home" />,
};
