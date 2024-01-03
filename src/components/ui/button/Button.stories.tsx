import CartIcon from "@/components/shared/icons/cartIcon/CartIcon";

import Button from "./Button";

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
    render: () => (
        <Button kind="cart">
            <CartIcon />
            <p>Добавить в корзину</p>
        </Button>
    ),
};

export const Small: Story = {
    render: () => <Button kind="small">Перейти на главную</Button>,
};
export const Clear: Story = {
    render: () => <Button kind="clear">Перейти на главную</Button>,
};
