import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BalanceContext, BalanceProvider } from "./BalanceContext"; // Adjust the path as needed
import { describe, it } from "vitest";
import { exampleData } from "../data/exampleData";

// Mock exampleData if needed
vi.mock("../data/exampleData", () => ({
  exampleData: [
    { expense: 100, date: "2023-09-01" },
    { expense: 50, date: "2023-09-02" },
  ],
}));

describe("BalanceProvider", () => {
  it("provides the correct initial state for balance-related values", () => {
    render(
      <BalanceProvider>
        <BalanceContext.Consumer>
          {({
            weeklyBalance,
            expensesToday,
            percentualChange,
            currentPage,
          }) => (
            <>
              <p data-testid="weeklyBalance">{weeklyBalance}</p>
              <p data-testid="expensesToday">{expensesToday}</p>
              <p data-testid="percentualChange">{percentualChange}</p>
              <p data-testid="currentPage">{currentPage}</p>
            </>
          )}
        </BalanceContext.Consumer>
      </BalanceProvider>,
    );

    expect(screen.getByTestId("weeklyBalance").textContent).toBe("150");
    expect(screen.getByTestId("expensesToday").textContent).toBe("100");
    expect(screen.getByTestId("percentualChange").textContent).toBe("50.0");
    expect(screen.getByTestId("currentPage").textContent).toBe("0");
  });

  it("updates currentPage when setCurrentPage is called", () => {
    render(
      <BalanceProvider>
        <BalanceContext.Consumer>
          {({ currentPage, setCurrentPage }) => (
            <>
              <p data-testid="currentPage">{currentPage}</p>
              <button onClick={() => setCurrentPage(1)}>Update Page</button>
            </>
          )}
        </BalanceContext.Consumer>
      </BalanceProvider>,
    );

    const button = screen.getByText("Update Page");
    fireEvent.click(button);

    expect(screen.getByTestId("currentPage").textContent).toBe("1");
  });
});
