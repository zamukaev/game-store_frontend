import Button, { ButtonProps } from "./Button";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
    component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    render: () => <Button>Зарегистрироваться</Button>,
};

export const Gray: Story = {
    render: () => <Button kind="gray">Выйти из аккаутна</Button>,
};

export const Cart: Story = {
    render: () => <Button kind="cart">Добавить в корзину</Button>,
};

export const Small: Story = {
    render: () => <Button kind="small">Перейти на главную</Button>,
};