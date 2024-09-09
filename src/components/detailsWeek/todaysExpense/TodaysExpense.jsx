import React, { useContext } from "react";
import { BalanceContext } from "../../../context/BalanceContext";

export default function TodaysExpense() {
  const { expensesToday } = useContext(BalanceContext);

  return (
    <div className="m-6">
      <div className="text-gray-400">Despeses avui</div>
      <div className="text-3xl font-extrabold">{expensesToday}€</div>
    </div>
  );
}
