import type { Preview } from "@storybook/react-vite";
import "../src/shared/ui/ui.css";

const preview: Preview = {
    tags: ["autodocs"],

    globalTypes: {
        theme: {
            toolbar: {
                title: "Тема",
                icon: "paintbrush",
                items: ["light", "dark"],
                dynamicTitle: true,
            },
        },
    },

    initialGlobals: {
        theme: "light",
    },

    decorators: [
        (Story, context) => (
            <div
                data-theme={context.globals.theme}
                className="ds-preview"
            >
                <Story />
            </div>
        ),
    ],
};

export default preview;