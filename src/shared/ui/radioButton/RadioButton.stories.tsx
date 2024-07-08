import RadioButton, { RadioTheme } from "./RadioButton";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RadioButton> = {
    component: RadioButton,
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const PrimaryRadio: Story = {
    render: () => (
        <RadioButton
            id="1"
            name="filter"
            text="hello"
            value="hello"
            changeHandler={() => {}}
        />
    ),
};

export const SecondaryRadio: Story = {
    render: () => (
        <RadioButton
            theme={RadioTheme.SECONDARY}
            id="1"
            name="filter"
            text="hello"
            value="hello"
            changeHandler={() => {}}
        />
    ),
};
