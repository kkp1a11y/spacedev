import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Table } from "./Table.tsx";
import { TableRow } from "../../molecules/TableRow/TableRow.tsx";

const meta = {
    title: "UI/Table",
    component: Table,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Приклад таблиці",
        columns: [{ label: "Назва" }, { label: "Кількість" }],
        children: (
            <>
                <TableRow cells={["A", 12]} />
                <TableRow cells={["B", 5]} />
            </>
        ),
    },
};

export const Compact: Story = {
    args: { ...Default.args, compact: true },
};

export const Sortable: Story = {
    args: {
        ...Default.args,
        columns: [
            { label: "Назва", direction: "asc", onSort: fn() },
            { label: "Кількість" },
        ],
    },
};