import type { Meta, StoryObj } from "@storybook/react-vite";
import { KpiCard } from "./KpiCard.tsx";

const meta = {
    title: "UI/KpiCard",
    component: KpiCard,
} satisfies Meta<typeof KpiCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        title: "Кількість",
        value: "42",
        note: "За вибраний період",
    },
};

export const Accent: Story = {
    args: { ...Normal.args, tone: "accent" },
};