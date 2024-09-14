import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import DetailsWeek from "./DetailsWeek";
import { BalanceContext } from "../../context/BalanceContext";
import { BalanceProvider } from "../../context/BalanceContext";

vi.mock("./graphic/Graphic", () => ({
  default: () => <div>Mocked Graphic</div>,
}));

describe("DetailsWeek component", () => {
  it("renders the Graphic component", () => {
    const mockBalanceContextValue = {
      expensesToday: [],
    };

    const { getByText } = render(
      <BalanceProvider value={mockBalanceContextValue}>
        <DetailsWeek />
      </BalanceProvider>,
    );

    expect(getByText("Mocked Graphic")).toBeInTheDocument();
  });
});
