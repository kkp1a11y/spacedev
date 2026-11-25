import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input.tsx";

const meta = {
    title: "UI/Input",
    component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { "aria-label": "Назва", placeholder: "Введіть назву" },
};

export const Invalid: Story = {
    args: { ...Default.args, invalid: true, defaultValue: "Помилка" },
};

export const Disabled: Story = {
    args: { ...Default.args, disabled: true },
};

export const Checkbox: Story = {
    args: {
        type: "checkbox",
        "aria-label": "Увімкнути",
        defaultChecked: true,
    },
};