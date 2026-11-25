import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "./Spinner.tsx";

const meta = {
    title: "UI/Spinner",
    component: Spinner,
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { label: "Завантаження…", size: "md" },
};

export const Small: Story = {
    args: { ...Default.args, size: "sm" },
};