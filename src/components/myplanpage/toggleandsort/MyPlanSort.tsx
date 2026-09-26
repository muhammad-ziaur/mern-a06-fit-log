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
    <div className="relative text-left">
      <div className="flex items-center gap-2 ">
        <span className="font-semibold  text-global-subtitle">Sort By</span>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex items-center gap-1 px-4 py-2 rounded-xl border-2 border-hero-background bg-hero-background  text-global-subtitle hover:text-white transition-all duration-200"
        >
          <span className="font-semibold">{sortBy}</span>
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-36 rounded-2xl border-2 border-hero-background bg-hero-background">
          <div className="flex flex-col gap-1 p-1">
            {criteria.map((criterion) => (
              <button
                key={criterion}
                onClick={() => handleSelect(criterion)}
                className={`cursor-pointer transition-all duration-200  w-full text-left px-4 py-2 rounded-xl text-sm ${
                  sortBy === criterion
                    ? "text-white  bg-hero-background font-semibold"
                    : "text-global-subtitle  font-semibold hover:bg-global-background  hover:text-button-primary"
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
