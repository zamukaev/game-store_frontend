import InputPrice from "./InputPrice";
import Button from "./InputPrice";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
    component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    render: () => <InputPrice type="priceTo" setValue={() => { }} placeholder="от 199" />,
};
