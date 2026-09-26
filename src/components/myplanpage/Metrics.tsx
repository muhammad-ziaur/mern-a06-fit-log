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
    <section className="rounded-2xl border-2 border-hero-background bg-hero-background py-10 px-5 flex justify-between items-center">
      <div className="flex flex-col flex-1 justify-between pl-6">
        <p className=" text-global-subtitle">Exercises</p>
        <h2 className="text-3xl text-button-primary font-bold uppercase">
          {exercisesValue}
        </h2>
      </div>
      <div className="flex flex-col flex-1 justify-between pl-6 border-l-2 border-hero-background">
        <p className=" text-global-subtitle">Minutes</p>
        <h2 className="text-3xl text-global-text font-bold uppercase">
          {minutesValue}
        </h2>
      </div>
      <div className="flex flex-col flex-1 justify-between pl-6 border-l-2 border-hero-background">
        <p className=" text-global-subtitle">Calories</p>
        <h2 className="text-3xl text-global-text font-bold uppercase">
          {caloriesValue}
        </h2>
      </div>
    </section>
  );
};

export default Metrics;
