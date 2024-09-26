import type { Meta, StoryObj } from "@storybook/react";
import "app/styles/index.scss";
import { Text, TextTheme } from "./Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/Text",
    component: Text,
    argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: "Title lorem ipsun",
        text: "Description description description description",
    },
};

export const Error: Story = {
    args: {
        title: "Title lorem ipsun",
        text: "Description description description description",
        theme: TextTheme.ERROR,
    },
};

export const OnlyTitle: Story = {
    args: {
        title: "Title lorem ipsun",
    },
};

export const OnlyText: Story = {
    args: {
        text: "Description description description description",
    },
};

export const PrimaryDark: Story = {
    args: {
        title: "Title lorem ipsun",
        text: "Description description description description",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
    args: {
        title: "Title lorem ipsun",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
    args: {
        text: "Description description description description",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
