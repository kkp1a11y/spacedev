import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { TableRow } from "./TableRow.tsx";
import { Table } from "../../organisms/Table/Table.tsx";

const meta = {
    title: "UI/TableRow",
    component: TableRow,
} satisfies Meta<typeof TableRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        cells: ["Приклад", "Опис"],
        label: "Рядок прикладу",
    },

    render: (args) => (
        <Table
            label="Приклад"
            columns={[{ label: "Назва" }, { label: "Опис" }]}
        >
            <TableRow {...args} />
        </Table>
    ),
};

export const Interactive: Story = {
    ...Default,
    args: { ...Default.args, onActivate: fn() },
};