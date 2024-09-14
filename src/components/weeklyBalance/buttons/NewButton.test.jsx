import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BalanceContext } from "../../../context/BalanceContext";
import CoolButton from "./NewButton";
import { describe, it, expect, vi } from "vitest";

describe("CoolButton component", () => {
  it("renders and is initially enabled", () => {
    render(
      <BalanceContext.Provider
        value={{ currentPage: 1, setCurrentPage: vi.fn() }}
      >
        <CoolButton />
      </BalanceContext.Provider>,
    );

    const button = screen.getByRole("button", { name: /flying arrow button/i });
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  it("disables button when animating", () => {
    const mockSetCurrentPage = vi.fn();

    render(
      <BalanceContext.Provider
        value={{ currentPage: 1, setCurrentPage: mockSetCurrentPage }}
      >
        <CoolButton />
      </BalanceContext.Provider>,
    );

    const button = screen.getByRole("button", { name: /flying arrow button/i });
    fireEvent.click(button);

    expect(button).toBeDisabled();
  });

  it("re-enables the button after animation", async () => {
    const mockSetCurrentPage = vi.fn();

    render(
      <BalanceContext.Provider
        value={{ currentPage: 1, setCurrentPage: mockSetCurrentPage }} // Ensure currentPage is > 0
      >
        <CoolButton />
      </BalanceContext.Provider>,
    );

    const button = screen.getByRole("button", { name: /flying arrow button/i });
    fireEvent.click(button);

    await waitFor(
      () => {
        expect(button).not.toBeDisabled();
      },
      { timeout: 2500 },
    );
  });

  it("does not change page or animate if currentPage is at minimum", () => {
    const mockSetCurrentPage = vi.fn();
    const minPage = 0;

    render(
      <BalanceContext.Provider
        value={{ currentPage: minPage, setCurrentPage: mockSetCurrentPage }}
      >
        <CoolButton />
      </BalanceContext.Provider>,
    );

    const button = screen.getByRole("button", { name: /flying arrow button/i });
    fireEvent.click(button);

    expect(mockSetCurrentPage).not.toHaveBeenCalled();
    expect(button).not.toBeDisabled();
  });
});
