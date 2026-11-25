import type { Meta, StoryObj } from "@storybook/react-vite";
import { useArgs } from "storybook/preview-api";
import { Counter } from "./Counter.tsx";

const meta = {
    title: "UI/Counter",
    component: Counter,
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
    args: {
        label: "Кількість",
        value: 10,
        min: 5,
        max: 20,
        step: 5,
        initial: 10,
        onChange: () => {},
    },

    render: function Render(args) {
        const [{ value }, updateArgs] = useArgs();

        return (
            <Counter
                {...args}
                value={value}
                onChange={(value) => updateArgs({ value })}
            />
        );
    },
};

export const Disabled: Story = {
    args: { ...Interactive.args, disabled: true },
};