import SearchInput from "./SearchInput";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SearchInput> = {
    component: SearchInput,
};
export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
    render: () => (
        <SearchInput onSearch={() => {}} placeholder="Поиск товара" />
    ),
};
