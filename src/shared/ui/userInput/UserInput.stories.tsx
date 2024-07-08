import UserInput from "./UserInput";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof UserInput> = {
    component: UserInput,
};
export default meta;

type Story = StoryObj<typeof UserInput>;

export const Password: Story = {
    render: () => (
        <UserInput
            kind="password"
            value="password"
            onChange={(value) => console.log(value)}
        />
    ),
};

export const Number: Story = {
    render: () => (
        <UserInput
            kind="number"
            value="password"
            onChange={(value) => console.log(value)}
        />
    ),
};

export const Username: Story = {
    render: () => (
        <UserInput
            kind="username"
            value="password"
            onChange={(value) => console.log(value)}
        />
    ),
};
