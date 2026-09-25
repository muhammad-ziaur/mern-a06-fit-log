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
      <button className="flex cursor-pointer items-center justify-center gap-1.5 rounded-full border-0 px-4 py-2 font-semibold">
        <span className="text-white">Plan</span>

        <span className=" bg-button-primary font-semibold text-details-button-one flex h-6 w-6 items-center justify-center rounded-full">
          {plannedExercises.length}
        </span>
      </button>
    </Link>
  );
};

export default NavbarPlanButton;
