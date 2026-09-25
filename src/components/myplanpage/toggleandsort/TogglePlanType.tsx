"use client";
import { ExercisesContext } from "@/context/ExercisesContext";
import { useContext } from "react";
import React from "react";

const TogglePlanType = () => {
  const {
    currentPlanType,
    setCurrentPlanType,
    setInsideHomePage,
    setInsideMyPlanPage,
  } = useContext(ExercisesContext);
  return (
    <section className="flex gap-1 justify-between rounded-2xl border-2 border-hero-background bg-hero-background">
      <div
        onClick={() => {
          setCurrentPlanType("plan");
          setInsideMyPlanPage(true);
          setInsideHomePage(false);
        }}
        className={`flex justify-center items-center px-4 py-2 rounded-2xl cursor-pointer transition-all duration-200 ${
          currentPlanType === "plan"
            ? "bg-black text-button-primary shadow-sm"
            : "text-global-subtitle hover:text-white"
        }`}
      >
        <p>{`Today's Plan`}</p>
      </div>

      <div
        onClick={() => {
          setCurrentPlanType("saved");
          setInsideMyPlanPage(true);
          setInsideHomePage(false);
        }}
        className={`flex justify-center items-center px-4 py-2 rounded-2xl cursor-pointer transition-all duration-200 ${
          currentPlanType === "saved"
            ? "bg-black text-button-primary shadow-sm"
            : "text-global-subtitle hover:text-white"
        }`}
      >
        <p>{`Saved`}</p>
      </div>
    </section>
  );
};

export default TogglePlanType;
