"use client";
import { SortContext } from "@/context/SortContext";
import { SortCriteria } from "@/types/sortcriteria.type";
import { useContext } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const MyPlanSort = () => {
  const { sortBy, setSortBy, isOpen, setIsOpen } = useContext(SortContext);
  const criteria: SortCriteria[] = ["Duration", "Calories", "Rating"];
  const handleSelect = (criterion: SortCriteria) => {
    setSortBy(criterion);
    setIsOpen(false);
  };

  return (
    <div className="relative text-left w-full sm:w-auto flex justify-between sm:justify-start items-center">
      <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
        <span className="font-semibold text-global-subtitle text-sm sm:text-base">
          Sort By
        </span>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex items-center justify-between gap-1 px-4 py-2 rounded-xl border-2 border-hero-background bg-hero-background text-global-subtitle hover:text-white transition-all duration-200 text-sm sm:text-base min-w-32.5"
        >
          <span className="font-semibold">{sortBy}</span>
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </div>

      {isOpen && (
        <div className="backdrop-blur-md absolute right-0 sm:right-0 top-full mt-2 w-full sm:w-40 rounded-2xl border border-neutral-700/80 bg-neutral-900/95 shadow-2xl shadow-black/70 z-50 p-1.5">
          <div className="flex flex-col gap-1">
            {criteria.map((criterion) => (
              <button
                key={criterion}
                onClick={() => handleSelect(criterion)}
                className={`cursor-pointer transition-all duration-200 w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium ${
                  sortBy === criterion
                    ? "text-white bg-neutral-800 font-semibold shadow-inner"
                    : "text-neutral-300 hover:bg-neutral-800/60 hover:text-white"
                }`}
              >
                {criterion}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPlanSort;
