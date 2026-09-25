"use client";
import { ExercisesContext } from "@/context/ExercisesContext";
import Link from "next/link";
import React, { useContext } from "react";

const NavbarSavedButton = () => {
  const {
    setCurrentPlanType,
    savedExercises,
    setInsideHomePage,
    setInsideMyPlanPage,
  } = useContext(ExercisesContext);
  const handleNavbarSavedButton = () => {
    setCurrentPlanType("saved");
    setInsideMyPlanPage(true);
    setInsideHomePage(false);
  };
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL!}/my-plan`}
      onClick={handleNavbarSavedButton}
    >
      <button className="flex cursor-pointer items-center justify-center gap-1.5 rounded-full border-0 px-4 py-2 font-semibold text-details-button-two">
        <span className="text-global-subtitle">Saved</span>

        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-global-subtitle  text-white font-semibold">
          {savedExercises.length}
        </span>
      </button>
    </Link>
  );
};
export default NavbarSavedButton;
