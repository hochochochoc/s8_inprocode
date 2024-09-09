import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function LeftButton() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative h-12 w-10 rounded-lg transition-all duration-300 ease-in-out hover:bg-red-300 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 ${isAnimating ? "" : ""}`}
      aria-label="Arrow button"
      disabled={isAnimating}
    >
      <ArrowLeft
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-white transition-all duration-300`}
        size={24}
      />
    </button>
  );
}
