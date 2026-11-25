import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button.tsx";

const meta = {
    title: "UI/Button",
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: { children: "Зберегти", variant: "primary", size: "md" },
};

export const Secondary: Story = {
    args: { ...Primary.args, variant: "secondary" },
};

export const Danger: Story = {
    args: { ...Primary.args, variant: "danger" },
};

export const Small: Story = {
    args: { ...Primary.args, size: "sm" },
};

export const Disabled: Story = {
    args: { ...Primary.args, disabled: true },
};