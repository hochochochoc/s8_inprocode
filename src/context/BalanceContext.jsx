import React, { createContext, useState, useEffect } from "react";
import { exampleData } from "../data/exampleData";

const BalanceContext = createContext();

const BalanceProvider = ({ children }) => {
  const [weeklyBalance, setWeeklyBalance] = useState(0);
  const [expensesToday, setExpensesToday] = useState(0);
  const [percentualChange, setPercentualChange] = useState(0);

  useEffect(() => {
    const balance = [...exampleData]
      .slice(0, 7)
      .reduce((sum, entry) => sum + entry.expense, 0);

    setWeeklyBalance(balance);
  }, []);

  useEffect(() => {
    const todaysExpense = [...exampleData]
      .slice(0, 1)
      .reduce((sum, entry) => sum + entry.expense, 0);

    setExpensesToday(todaysExpense);
  }, []);

  useEffect(() => {
    const todaysExpense = [...exampleData]
      .slice(0, 1)
      .reduce((sum, entry) => sum + entry.expense, 0);
    const yesterdaysExpense = [...exampleData]
      .slice(1, 2)
      .reduce((sum, entry) => sum + entry.expense, 0);

    const percentualChange = (
      100 -
      (yesterdaysExpense / todaysExpense) * 100
    ).toFixed(1);

    setPercentualChange(percentualChange);
  }, []);

  return (
    <BalanceContext.Provider
      value={{
        weeklyBalance,
        expensesToday,
        percentualChange,
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
};

export { BalanceProvider, BalanceContext };
