import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "./Button";
import React from "react";

describe("Button", () => {
    test("render in the DOM", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });
    test("check clear class", () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass("clear");
        screen.debug();
    });
});
