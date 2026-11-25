import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    framework: "@storybook/react-vite",
    stories: ["../src/shared/ui/**/*.stories.tsx"],
    addons: ["@storybook/addon-docs"],
};

export default config;