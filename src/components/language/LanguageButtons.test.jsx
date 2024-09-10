import { render, screen, fireEvent } from "@testing-library/react";
import LanguageButtons from "./LanguageButtons";
import { vi } from "vitest";

vi.mock("../../i18n/i18n", () => ({
  __esModule: true,
  default: {
    changeLanguage: vi.fn(),
  },
}));

describe("LanguageButtons", () => {
  it("changes the language on click", async () => {
    const { default: i18n } = await import("../../i18n/i18n");

    render(<LanguageButtons />);

    const mongolButton = screen.getByLabelText("Mongol Flag Button");
    const catalanButton = screen.getByLabelText("Catalan Flag Button");
    const spanishButton = screen.getByLabelText("Spanish Flag Button");
    const englishButton = screen.getByLabelText("English Flag Button");

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
