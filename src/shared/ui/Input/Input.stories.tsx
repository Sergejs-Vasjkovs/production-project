import type { Meta, StoryObj } from "@storybook/react";
import "app/styles/index.scss";
import { Input } from "./Input";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/Input",
    component: Input,
    argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        placeholder: "PLACEHOLDER",
        value: "input text",
    },
};

export const Dark: Story = {
    args: {
        placeholder: "PLACEHOLDER",
        value: "input text",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
