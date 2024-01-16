import LinkItem, { Kind } from "./LinkItem";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LinkItem> = {
    component: LinkItem,
};
export default meta;

type Story = StoryObj<typeof LinkItem>;

export const Email: Story = {
    render: () => <LinkItem kind={Kind.EMAIL} >email</LinkItem>,
};

export const Instagram: Story = {
    render: () => <LinkItem kind={Kind.INSTAGRAM} >instagram</LinkItem>,
};

export const PHONE: Story = {
    render: () => <LinkItem kind={Kind.PHONE}  >123 456 567 78</LinkItem>,
};
export const WhatsApp: Story = {
    render: () => <LinkItem kind={Kind.WHATSAPP} >WahtsApp</LinkItem>,
};
