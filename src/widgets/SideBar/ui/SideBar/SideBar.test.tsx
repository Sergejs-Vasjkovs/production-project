import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { withTranslation } from "react-i18next";
import { SideBar } from "widgets/SideBar/ui/SideBar/SideBar";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("SideBar", () => {
    test("render in the DOM", () => {
        renderWithTranslation(<SideBar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
    test("test toggle", () => {
        renderWithTranslation(<SideBar />);
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
