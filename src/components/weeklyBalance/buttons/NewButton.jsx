import { useState, useContext } from "react";
import { ArrowRight } from "lucide-react";
import { BalanceContext } from "../../../context/BalanceContext";

export default function CoolButton() {
  const [isAnimating, setIsAnimating] = useState(false);

  const { currentPage, setCurrentPage } = useContext(BalanceContext);

  const handleClick = () => {
    if (currentPage > 0) {
      setIsAnimating(true);

      setCurrentPage(currentPage - 1);
      setTimeout(() => setIsAnimating(false), 2000);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`transparent relative h-12 rounded-lg transition-all duration-300 ease-in-out hover:bg-red-300 hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 ${isAnimating ? "w-14" : "w-10"} `}
        aria-label="Flying arrow button"
        disabled={isAnimating}
      >
        <ArrowRight
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white transition-all duration-300 ${isAnimating ? "animate-fly-arrow" : ""} `}
          size={24}
        />
      </button>
      <style>{`
        @keyframes fly-arrow {
          0% {
            left: 50%;
            opacity: 1;
          }

          100% {
            left: 2200%;
            opacity: 1;
          }
        }
        .animate-fly-arrow {
          animation: fly-arrow 1.5s ease-in-out forwards;
        }
      `}</style>
    </>
  );
}
