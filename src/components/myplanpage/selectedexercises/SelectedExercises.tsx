"use client"; //for useContext hook
import { ExercisesContext } from "@/context/ExercisesContext";
import React, { useContext } from "react";
import EmptySelectionCard from "./selectedexercisescards/EmptySelectionCard";
import { IExercise } from "@/types/exercise.type";
import PlannedExerciseCard from "./selectedexercisescards/PlannedExerciseCard";
import SavedExerciseCard from "./selectedexercisescards/SavedExerciseCard";

const SelectedExercises = () => {
  const { currentPlanType, plannedExercises, savedExercises } =
    useContext(ExercisesContext);
  return currentPlanType === "plan" ? (
    <section className="mt-20 flex flex-col gap-4">
      {plannedExercises.length === 0 ? (
        <EmptySelectionCard />
      ) : (
        plannedExercises.map((plannedExercise: IExercise) => {
          return (
            <PlannedExerciseCard
              key={plannedExercise.id}
              plannedExercise={plannedExercise}
            />
          );
        })
      )}
    </section>
  ) : (
    <section className="mt-20 flex flex-col gap-4">
      {savedExercises.length === 0 ? (
        <EmptySelectionCard />
      ) : (
        savedExercises.map((savedExercise: IExercise) => {
          return (
            <SavedExerciseCard
              key={savedExercise.id}
              savedExercise={savedExercise}
            />
          );
        })
      )}
    </section>
  );
};

export default SelectedExercises;
