import "./index.css";
import WeeklyBalance from "./components/weeklyBalance/WeeklyBalance";
import DetailsWeek from "./components/detailsWeek/detailsWeek";
import { BalanceProvider } from "./context/BalanceContext";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-orange-100">
      <BalanceProvider>
        <WeeklyBalance />
        <DetailsWeek />
      </BalanceProvider>
    </div>
  );
}

export default App;
