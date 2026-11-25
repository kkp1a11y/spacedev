import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataChart } from "./DataChart.tsx";

const meta = {
    title: "UI/DataChart",
    component: DataChart,
} satisfies Meta<typeof DataChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bar: Story = {
    args: {
        type: "bar",
        data: [
            { name: "Група A", value: 8 },
            { name: "Група B", value: 3 },
        ],
    },
};

export const Pie: Story = {
    args: { ...Bar.args, type: "pie" },
};

export const Empty: Story = {
    args: { type: "bar", data: [] },
};
export const CustomLabels: Story = {
    args: {
        type: "bar",
        data: [],
        seriesName: "Кількість товарів",
        emptyLabel: "Товарів поки немає.",
    },
};