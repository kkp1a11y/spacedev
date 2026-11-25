import type { Meta, StoryObj } from "@storybook/react-vite";
import { FilterPanel } from "./FilterPanel.tsx";
import { Field } from "../../molecules/Field/Field.tsx";
import { Input } from "../../atoms/Input/Input.tsx";
import { Button } from  "../../atoms/Button/Button.tsx"

const meta = {
    title: "UI/FilterPanel",
    component: FilterPanel,
} satisfies Meta<typeof FilterPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
    args: {
        direction: "row",
        children: (
            <>
                <Field label="Пошук">
                    <Input type="search" />
                </Field>
                <Button>Застосувати</Button>
            </>
        ),
    },
};

export const Column: Story = {
    args: { ...Row.args, direction: "column" },
};