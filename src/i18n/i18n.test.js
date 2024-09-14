import { describe, it, expect } from "vitest";
import i18n from "./i18n";

describe("i18n configuration", () => {
  it("should initialize with correct default language and resources", () => {
    expect(i18n.language).toBe("ca");

    expect(i18n.options.fallbackLng).toContain("en");

    const languages = ["mo", "ca", "en", "es"];
    languages.forEach((lang) => {
      expect(i18n.getResourceBundle(lang, "translation")).not.toBeUndefined();
    });

    expect(i18n.t("graph_headline", { lng: "ca" })).toBe(
      "Despeses - Última setmana",
    );
    expect(i18n.t("expenses_today", { lng: "en" })).toBe("Expenses today");
  });
});
