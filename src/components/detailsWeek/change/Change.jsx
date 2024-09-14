import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { BalanceContext } from "../../../context/BalanceContext";

export default function Change() {
  const { percentualChange } = useContext(BalanceContext);
  const { t } = useTranslation();

  return (
    <div className="m-6 mt-10">
      <p className="text-end font-extrabold">
        {percentualChange > 0
          ? `+${percentualChange}%`
          : percentualChange < 0
            ? `${percentualChange}%`
            : `${percentualChange}%`}
      </p>
      <p className="text-end text-sm">{t("comparison")}</p>
    </div>
  );
}
