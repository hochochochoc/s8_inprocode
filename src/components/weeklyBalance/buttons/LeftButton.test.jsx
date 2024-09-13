import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BalanceContext } from "../../../context/BalanceContext";
import LeftButton from "./LeftButton";
import { describe, it, expect, vi } from "vitest";

describe("LeftButton component", () => {
  it("renders and is initially enabled", () => {
    render(
      <BalanceContext.Provider
        value={{ currentPage: 0, setCurrentPage: vi.fn() }}
      >
        <LeftButton />
      </BalanceContext.Provider>,
    );

    const button = screen.getByRole("button", { name: /arrow button/i });
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  it("disables button when animating", () => {
    const mockSetCurrentPage = vi.fn();

    render(
      <BalanceContext.Provider
        value={{ currentPage: 0, setCurrentPage: mockSetCurrentPage }}
      >
        <LeftButton />
      </BalanceContext.Provider>,
    );

    const button = screen.getByRole("button", { name: /arrow button/i });
    fireEvent.click(button);

    expect(button).toBeDisabled();
  });

  it("re-enables the button after animation", async () => {
    const mockSetCurrentPage = vi.fn();

    render(
      <BalanceContext.Provider
        value={{ currentPage: 0, setCurrentPage: mockSetCurrentPage }}
      >
        <LeftButton />
      </BalanceContext.Provider>,
    );

    const button = screen.getByRole("button", { name: /arrow button/i });
    fireEvent.click(button);

    await waitFor(
      () => {
        expect(button).not.toBeDisabled();
      },
      { timeout: 2000 },
    );
  });
});
