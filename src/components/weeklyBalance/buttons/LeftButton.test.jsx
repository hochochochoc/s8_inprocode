import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BalanceContext } from "../../../context/BalanceContext";
import LeftButton from "./LeftButton";
import { describe, it, expect, vi } from "vitest";
import { exampleData } from "../../../data/exampleData";

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

  it("does not change page or animate if currentPage is at maximum", () => {
    const mockSetCurrentPage = vi.fn();
    const maxPage = Math.floor(exampleData.length / 7) - 1;

    render(
      <BalanceContext.Provider
        value={{ currentPage: maxPage, setCurrentPage: mockSetCurrentPage }}
      >
        <LeftButton />
      </BalanceContext.Provider>,
    );

    const button = screen.getByRole("button", { name: /arrow button/i });
    fireEvent.click(button);

    expect(mockSetCurrentPage).not.toHaveBeenCalled();
    expect(button).not.toBeDisabled();
  });
});
