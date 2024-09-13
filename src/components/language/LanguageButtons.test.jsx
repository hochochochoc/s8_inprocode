import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LanguageButtons from "./LanguageButtons";
import { describe, it, vi } from "vitest";

// Mock i18n module
vi.mock("../../i18n/i18n", () => ({
  __esModule: true,
  default: {
    changeLanguage: vi.fn(),
  },
}));

import i18n from "../../i18n/i18n"; // Import after mocking

describe("LanguageButtons", () => {
  it("changes the language on click", () => {
    render(<LanguageButtons />);

    const buttons = screen.getAllByRole("button");

    const mongolButton = buttons.find(
      (button) => button.getAttribute("aria-label") === "Mongol Flag Button",
    );
    const catalanButton = buttons.find(
      (button) => button.getAttribute("aria-label") === "Catalan Flag Button",
    );
    const spanishButton = buttons.find(
      (button) => button.getAttribute("aria-label") === "Spanish Flag Button",
    );
    const englishButton = buttons.find(
      (button) => button.getAttribute("aria-label") === "English Flag Button",
    );

    if (!mongolButton || !catalanButton || !spanishButton || !englishButton) {
      throw new Error("One or more buttons not found");
    }

    fireEvent.click(mongolButton);
    expect(i18n.changeLanguage).toHaveBeenCalledWith("mo");

    fireEvent.click(catalanButton);
    expect(i18n.changeLanguage).toHaveBeenCalledWith("ca");

    fireEvent.click(spanishButton);
    expect(i18n.changeLanguage).toHaveBeenCalledWith("es");

    fireEvent.click(englishButton);
    expect(i18n.changeLanguage).toHaveBeenCalledWith("en");
  });
});
