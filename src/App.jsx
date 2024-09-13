import React from "react";

import "./index.css";

import WeeklyBalance from "./components/weeklyBalance/WeeklyBalance";

import DetailsWeek from "./components/detailsWeek/DetailsWeek";
import { BalanceProvider } from "./context/BalanceContext";
import LanguageButtons from "./components/language/LanguageButtons";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-orange-100">
      <BalanceProvider>
        <LanguageButtons />
        <WeeklyBalance />
        <DetailsWeek />
      </BalanceProvider>
    </div>
  );
}

export default App;
