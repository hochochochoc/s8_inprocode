import React from "react";
import Change from "./change/Change";
import Graphic from "./graphic/Graphic";
import TodaysExpense from "./todaysExpense/TodaysExpense";

export default function DetailsWeek() {
  return (
    <div className="m-4 overflow-hidden rounded-lg bg-white p-2 pt-4 lg:w-1/3">
      <Graphic />
      <div className="flex justify-between font-bold">
        <TodaysExpense />
        <Change />
      </div>
    </div>
  );
}
