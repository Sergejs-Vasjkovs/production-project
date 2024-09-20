import type { Meta, StoryObj } from "@storybook/react";
import "app/styles/index.scss";
import { Modal } from "./Modal";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
    title: "shared/Modal",
    component: Modal,
    argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalLight: Story = {
    args: {
        isOpen: true,
        children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem porro debitis ipsa, possimus voluptates corrupti nam est enim? Totam cum cupiditate reprehenderit quam minima at fugit consectetur laborum, quod iste.,",
    },
};

export const ModalDark: Story = {
    args: {
        isOpen: true,
        children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem porro debitis ipsa, possimus voluptates corrupti nam est enim? Totam cum cupiditate reprehenderit quam minima at fugit consectetur laborum, quod iste.,",
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
