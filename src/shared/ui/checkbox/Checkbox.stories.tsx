import Checkbox from "@/shared/ui/checkbox/Checkbox";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Checkbox> = {
    component: Checkbox,
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    render: () => <Checkbox />,
};
