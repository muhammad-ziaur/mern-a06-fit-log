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
    <Link href="/my-plan" onClick={handleNavbarSavedButton}>
      <button className="flex cursor-pointer items-center justify-center gap-1.5 rounded-full border-0 px-5 py-2.5 font-semibold text-details-button-two  hover:bg-hero-background transition-all duration-200">
        <span className="text-global-subtitle">Saved</span>

        <span className="flex w-8 items-center justify-center rounded-full border border-global-subtitle  text-white font-semibold">
          {savedExercises.length}
        </span>
      </button>
    </Link>
  );
};
export default NavbarSavedButton;
