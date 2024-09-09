import React, { useContext } from "react";
import { BalanceContext } from "../../../context/BalanceContext";

export default function Change() {
  const { percentualChange } = useContext(BalanceContext);

  return (
    <div className="m-6">
      <p className="text-end font-extrabold">
        {percentualChange >= 0
          ? `+${percentualChange}%`
          : `${percentualChange}%`}
      </p>
      <p className="text-end text-sm">respecte a ahir</p>
    </div>
  );
}
