import React from "react";
import i18n from "../../i18n/i18n";

export default function LanguageButtons() {
  const changeLanguage = (lang) => () => {
    i18n.changeLanguage(lang);
  };
  return (
    <div className="m-4 flex justify-end space-x-1 lg:w-1/3">
      <button
        className="h-12 w-12 rounded-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/public/mon_flag.png)" }}
        aria-label="Mongol Flag Button"
        onClick={changeLanguage("mo")}
      ></button>
      <button
        className="h-12 w-12 rounded-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/public/cat_flag.png)" }}
        aria-label="Catalan Flag Button"
        onClick={changeLanguage("ca")}
      ></button>
      <button
        className="h-12 w-12 rounded-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/public/esp_flag.png)" }}
        aria-label="Spanish Flag Button"
        onClick={changeLanguage("es")}
      ></button>
      <button
        className="h-12 w-12 rounded-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/public/uk_flag.png)" }}
        aria-label="English Flag Button"
        onClick={changeLanguage("en")}
      ></button>
    </div>
  );
}
