import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card.tsx";

const meta = {
    title: "UI/Card",
    component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
    args: {
        title: "Заголовок",
        children: "Довільний вміст",
        variant: "outlined",
    },
};

export const Raised: Story = {
    args: { ...Outlined.args, variant: "raised" },
};

export const Compact: Story = {
    args: { ...Outlined.args, compact: true },
};