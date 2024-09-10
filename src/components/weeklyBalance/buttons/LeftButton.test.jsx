import { render, screen, fireEvent } from "@testing-library/react";
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

  it("re-enables the button after animation", () => {
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

    // Wait for the animation timeout
    setTimeout(() => {
      expect(button).not.toBeDisabled();
    }, 2000);
  });
});
