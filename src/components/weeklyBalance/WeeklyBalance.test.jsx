import React from "react";
import { render, screen } from "@testing-library/react";
import { BalanceContext } from "../../context/BalanceContext";
import WeeklyBalance from "./WeeklyBalance";
import { describe, it, expect, vi } from "vitest";
import { useTranslation } from "react-i18next";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

describe("WeeklyBalance component", () => {
  it("renders and displays the weekly balance", () => {
    const mockWeeklyBalance = 1000;

    render(
      <BalanceContext.Provider value={{ weeklyBalance: mockWeeklyBalance }}>
        <WeeklyBalance />
      </BalanceContext.Provider>,
    );

    // Check for the balance label and value
    const balanceElement = screen.getByText(/total_balance/i);
    expect(balanceElement).toBeInTheDocument();

    const balanceValue = screen.getByText(`${mockWeeklyBalance.toFixed(0)}€`);
    expect(balanceValue).toBeInTheDocument();

    // Check for the LeftButton using aria-label
    const leftButton = screen.getByLabelText(/Left arrow button/i);
    expect(leftButton).toBeInTheDocument();

    // Check for the CoolButton using aria-label
    const coolButton = screen.getByLabelText(/Flying arrow button/i);
    expect(coolButton).toBeInTheDocument();
  });
});
