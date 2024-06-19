import { useState } from "react";

import SearchInput from "./SearchInput";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SearchInput> = {
    component: SearchInput,
};
export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
    render: () => {
        const [searchQuery, setSearchQuery] = useState("");

        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
        };

        const handleInputChange = (
            event: React.ChangeEvent<HTMLInputElement>
        ) => {
            setSearchQuery(event.target.value);
        };

        return (
            <SearchInput
                handleSubmit={handleSubmit}
                placeholder="Поиск товара"
                handleInputChange={handleInputChange}
                searchQuery={searchQuery}
            />
        );
    },
};
