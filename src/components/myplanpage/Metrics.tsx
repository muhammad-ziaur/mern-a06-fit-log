"use client";
import { ExercisesContext } from "@/context/ExercisesContext";
import { IExercise } from "@/types/exercise.type";
import React, { useContext } from "react";

const Metrics = () => {
  const { currentPlanType, plannedExercises, savedExercises } =
    useContext(ExercisesContext);
  const commonExercises: IExercise[] =
    currentPlanType === "plan" ? plannedExercises : savedExercises;

  const exercisesValue: number = commonExercises.reduce((accm) => accm + 1, 0);
  const minutesValue: number = commonExercises.reduce(
    (accm, elem: IExercise) => accm + elem.duration,
    0,
  );
  const caloriesValue: number = commonExercises.reduce(
    (accm, elem: IExercise) => accm + elem.caloriesBurned,
    0,
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 w-full">
      <section className="rounded-2xl border-2 border-hero-background bg-hero-background py-8 px-6 sm:px-8 md:py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 w-full">
        <div className="flex flex-col flex-1 justify-between pl-0 md:pl-6 w-full text-left">
          <p className="text-global-subtitle text-sm sm:text-base">Exercises</p>
          <h2 className="text-2xl sm:text-3xl text-button-primary font-bold uppercase mt-1">
            {exercisesValue}
          </h2>
        </div>
        <div className="flex flex-col flex-1 justify-between pl-0 md:pl-6 pt-4 md:pt-0 border-t-2 md:border-t-0 md:border-l-2 border-hero-background w-full text-left">
          <p className="text-global-subtitle text-sm sm:text-base">Minutes</p>
          <h2 className="text-2xl sm:text-3xl text-global-text font-bold uppercase mt-1">
            {minutesValue}
          </h2>
        </div>
        <div className="flex flex-col flex-1 justify-between pl-0 md:pl-6 pt-4 md:pt-0 border-t-2 md:border-t-0 md:border-l-2 border-hero-background w-full text-left">
          <p className="text-global-subtitle text-sm sm:text-base">Calories</p>
          <h2 className="text-2xl sm:text-3xl text-global-text font-bold uppercase mt-1">
            {caloriesValue}
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Metrics;
