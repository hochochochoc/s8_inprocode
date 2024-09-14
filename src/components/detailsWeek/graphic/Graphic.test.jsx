import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Graphic from "./Graphic";
import { BalanceContext } from "../../../context/BalanceContext";
import { exampleData } from "../../../data/exampleData";

// Mock the data to make the test predictable
const mockData = exampleData.slice(0, 7); // Adjust to match expected paginated data

const MockedGraphicComponent = ({ currentPage }) => (
  <BalanceContext.Provider value={{ currentPage }}>
    <Graphic />
  </BalanceContext.Provider>
);

describe("Graphic component", () => {
  it("renders SVG elements correctly based on the currentPage", () => {
    // Mock currentPage value
    const { container } = render(<MockedGraphicComponent currentPage={0} />);

    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();

    // Check for presence of bars
    const bars = svg.querySelectorAll("rect");
    expect(bars.length).toBe(mockData.length);

    // Check for presence of the reference line
    const line = svg.querySelector("line");
    expect(line).toBeInTheDocument();
  });
});
