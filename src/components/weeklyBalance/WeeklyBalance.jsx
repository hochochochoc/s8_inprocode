import React, { useContext } from "react";
import { BalanceContext } from "../../context/BalanceContext";
import CoolButton from "./buttons/NewButton";
import LeftButton from "./buttons/LeftButton";

export default function WeeklyBalance() {
  const { weeklyBalance } = useContext(BalanceContext);

  return (
    <div>
      <div
        style={{ backgroundColor: "#FA8072" }}
        className="m-4 flex rounded-lg p-4 text-white lg:w-1/3"
      >
        <div className="m-2 flex flex-1 flex-col">
          <p className="text-sm">Balanç total</p>
          <p className="text-xl font-bold">{weeklyBalance.toFixed(0)}€</p>
        </div>
        <div className="flex items-center justify-end">
          <LeftButton />
          <CoolButton />
        </div>
      </div>
    </div>
  );
}
