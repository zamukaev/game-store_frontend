import LinkItem, { Kind } from "./LinkItem";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LinkItem> = {
    component: LinkItem,
};
export default meta;

type Story = StoryObj<typeof LinkItem>;

export const Email: Story = {
    render: () => <LinkItem kind={Kind.EMAIL} text="email" />,
};

export const Instagram: Story = {
    render: () => <LinkItem kind={Kind.INSTAGRAM} text="instagram" />,
};

export const Telefon: Story = {
    render: () => <LinkItem kind={Kind.TELEFON} text="123 456 567 78" />,
};
export const WhatsApp: Story = {
    render: () => <LinkItem kind={Kind.WHATSAPP} text="WahtsApp" />,
};
