import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select.tsx";

const meta = {
    title: "UI/Select",
    component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        "aria-label": "Категорія",
        defaultValue: "",
        options: [
            { value: "", label: "Усі" },
            { value: "a", label: "Категорія A" },
        ],
    },
};

export const Invalid: Story = {
    args: { ...Default.args, invalid: true },
};

export const Disabled: Story = {
    args: { ...Default.args, disabled: true },
};