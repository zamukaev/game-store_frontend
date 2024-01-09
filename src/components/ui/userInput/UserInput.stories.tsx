import UserInput from "./UserInput";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof UserInput> = {
    component: UserInput,
};
export default meta;

type Story = StoryObj<typeof UserInput>;

export const Password: Story = {
    render: () => (
        <UserInput kind="password" />
    ),
};

export const Number: Story = {
    render: () => (
        <UserInput kind="number" />
    ),
};

export const Username: Story = {
    render: () => (
        <UserInput kind="username" />
    ),
};