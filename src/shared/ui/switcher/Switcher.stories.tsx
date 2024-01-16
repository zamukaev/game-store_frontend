import Switcher from "./Switcher";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Switcher> = {
    component: Switcher,
};
export default meta;

type Story = StoryObj<typeof Switcher>;

export const UnToggledSwitcher: Story = {
    render: () => <Switcher isToggled={false} />,
};
export const ToggledSwitcher: Story = {
    render: () => <Switcher isToggled={true} />,
};
