import Notification, { NotificationTheme } from "./Notification";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Notification> = {
    component: Notification,
};
export default meta;

type Story = StoryObj<typeof Notification>;

export const Success: Story = {
    args: {
        visible: true,
        children: "some text"
    },
};

export const Failed: Story = {
    args: {
        visible: true,
        theme: NotificationTheme.FAILED,
        children: "some text"
    },
};
