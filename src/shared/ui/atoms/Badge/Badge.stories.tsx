import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge.tsx";

const meta = {
    title: "UI/Badge",
    component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
    args: { children: "Очікується", tone: "neutral" },
};

export const Success: Story = {
    args: { children: "Успішно", tone: "success" },
};

export const Danger: Story = {
    args: { children: "Помилка", tone: "danger" },
};

export const Warning: Story = {
    args: { children: "Увага", tone: "warning" },
};