import React, { useContext } from "react";
import { BalanceContext } from "../../../context/BalanceContext";
import { useTranslation } from "react-i18next";

export default function TodaysExpense() {
  const { expensesToday } = useContext(BalanceContext);
  const { t } = useTranslation();

  return (
    <div className="m-6">
      <div className="text-gray-400">{t("expenses_today")}</div>
      <div className="text-3xl font-extrabold">{expensesToday}€</div>
    </div>
  );
}
