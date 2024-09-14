import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Change from "./Change";
import { BalanceContext } from "../../../context/BalanceContext";

const MockedChangeComponent = ({ percentualChange }) => (
  <BalanceContext.Provider value={{ percentualChange }}>
    <Change />
  </BalanceContext.Provider>
);

describe("Change component", () => {
  it("displays percentualChange with a '+' sign when it is positive", () => {
    const { getByText } = render(
      <MockedChangeComponent percentualChange={10} />,
    );
    expect(getByText("+10%")).toBeInTheDocument();
  });

  it("displays percentualChange without a '+' sign when it is negative", () => {
    const { getByText } = render(
      <MockedChangeComponent percentualChange={-5} />,
    );
    expect(getByText("-5%")).toBeInTheDocument();
  });

  it("displays percentualChange without a '+' sign when it is zero", () => {
    const { getByText } = render(
      <MockedChangeComponent percentualChange={0} />,
    );
    expect(getByText("0%")).toBeInTheDocument();
  });
});
