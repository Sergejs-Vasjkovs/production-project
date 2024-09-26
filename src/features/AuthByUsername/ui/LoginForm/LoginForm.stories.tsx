import type { Meta, StoryObj } from "@storybook/react";
import "app/styles/index.scss";
import { LoginForm } from "./LoginForm";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
    title: "features/LoginForm",
    component: LoginForm,
    argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    decorators: [StoreDecorator({ loginForm: { username: "admin", password: "123" } })],
};

export const Dark: Story = {
    args: {},
    decorators: [
        StoreDecorator({ loginForm: { username: "admin", password: "123" } }),
        ThemeDecorator(Theme.DARK),
    ],
};

export const WithError: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { username: "admin", password: "123", error: "ErrorForm" },
        }),
    ],
};

export const Loading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { isLoading: true },
        }),
    ],
};
