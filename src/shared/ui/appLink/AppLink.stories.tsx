import AppLink, { AppLinkTheme } from "./AppLink";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AppLink> = {
    component: AppLink,
};
export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    render: () => (
        <AppLink href="/cart" theme={AppLinkTheme.PRIMARY}>
            some text
        </AppLink>
    ),
};

export const Secondary: Story = {
    render: () => (
        <AppLink href="/cart" theme={AppLinkTheme.SECONDARY}>
            <p>Добавить в корзину</p>
        </AppLink>
    ),
};
export const Default: Story = {
    render: () => (
        <AppLink href="/cart" theme={AppLinkTheme.DEFAULT}>
            <p>Добавить в корзину</p>
        </AppLink>
    ),
};
