import { render, screen, fireEvent } from "@testing-library/react";
import { BalanceContext } from "../../../context/BalanceContext";
import LeftButton from "./LeftButton";
import { describe, it, expect, vi } from "vitest";

describe("LeftButton", () => {
  it("renders the button correctly", () => {
    render(
      <BalanceContext.Provider
        value={{ currentPage: 0, setCurrentPage: vi.fn() }}
      >
        <LeftButton />
      </BalanceContext.Provider>,
    );

    const button = screen.getByRole("button", { name: /arrow button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("h-12 w-10 rounded-lg");
    expect(button).not.toBeDisabled();
  });

  it("increments the current page and starts animation on click", () => {
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

    expect(mockSetCurrentPage).toHaveBeenCalledWith(1);
    expect(button).toBeDisabled();
  });
});
