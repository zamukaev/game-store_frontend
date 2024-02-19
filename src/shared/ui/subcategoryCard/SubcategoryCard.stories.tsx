import { SubcategoryCard } from "..";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SubcategoryCard> = {
    component: SubcategoryCard,
};
export default meta;

type Story = StoryObj<typeof SubcategoryCard>;

export const CardCategory: Story = {
    render: () => (
        <SubcategoryCard title="Title" image={""} text={"some text"} alt={" some text"} />
    ),
};
