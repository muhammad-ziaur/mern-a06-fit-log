"use client";
import { ExercisesContext } from "@/context/ExercisesContext";
import Link from "next/link";
import React, { useContext } from "react";

const NavbarPlanButton = () => {
  const {
    setCurrentPlanType,
    plannedExercises,
    setInsideHomePage,
    setInsideMyPlanPage,
  } = useContext(ExercisesContext);
  const handleNavbarPlanButton = () => {
    setCurrentPlanType("plan");
    setInsideMyPlanPage(true);
    setInsideHomePage(false);
  };
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL!}/my-plan`}
      onClick={handleNavbarPlanButton}
    >
      <button className="flex cursor-pointer items-center justify-center gap-1.5 rounded-full border-0 px-5 py-2.5 font-semibold  hover:bg-hero-background transition-all duration-200">
        <span className="text-white">Plan</span>

        <span className=" bg-button-primary font-semibold text-details-button-one flex w-8 items-center justify-center rounded-full">
          {plannedExercises.length}
        </span>
      </button>
    </Link>
  );
};

export default NavbarPlanButton;
