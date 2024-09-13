import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, it, vi } from "vitest";

vi.mock("./components/weeklyBalance/WeeklyBalance", () => ({
  default: () => <div>WeeklyBalance</div>,
}));
vi.mock("./components/detailsWeek/DetailsWeek", () => ({
  default: () => <div>DetailsWeek</div>,
}));
vi.mock("./components/language/LanguageButtons", () => ({
  default: () => <div>LanguageButtons</div>,
}));

describe("App", () => {
  it("renders without crashing and shows child components", () => {
    render(<App />);

    expect(screen.getByText("WeeklyBalance")).toBeInTheDocument();
    expect(screen.getByText("DetailsWeek")).toBeInTheDocument();
    expect(screen.getByText("LanguageButtons")).toBeInTheDocument();
  });
});
