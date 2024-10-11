import type { Meta, StoryObj } from "@storybook/react";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import LoginForm from "./LoginForm";

const meta = {
    title: "features/LoginForm",
    component: LoginForm,
    argTypes: {},
    args: {
        onSuccess: () => {},
    },
    decorators: [
        StoreDecorator({ loginForm: { username: "admin", password: "123", isLoading: true } }),
    ],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const WithError: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { username: "admin", password: "123", isLoading: false, error: "ErrorForm" },
        }),
    ],
};

export const Loading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { username: "admin", password: "123", isLoading: true, error: "ErrorForm" },
        }),
    ],
};
