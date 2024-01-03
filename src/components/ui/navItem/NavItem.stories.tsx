import { NavItem } from "./NavItem";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NavItem> = {
    component: NavItem,
};
export default meta;

type Story = StoryObj<typeof NavItem>;

export const CartIcon: Story = {
    render: () => <NavItem kind="cart" text="some text" />,
};

export const LoginIcon: Story = {
    render: () => <NavItem kind="login" text="some text" />,
};

export const Favorites: Story = {
    render: () => <NavItem kind="favorites" text="some text" />,
};
