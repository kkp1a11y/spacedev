import type { Meta, StoryObj } from "@storybook/react-vite";
import { Field } from "./Field.tsx";
import { Input } from "../../atoms/Input/Input.tsx";

const meta = {
    title: "UI/Field",
    component: Field,
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Ім’я",
        children: <Input placeholder="Введіть ім’я" />,
    },
};

export const Inline: Story = {
    args: {
        label: "Увімкнути",
        inline: true,
        children: <Input type="checkbox" />,
    },
};