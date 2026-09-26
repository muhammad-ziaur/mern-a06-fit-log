"use client"; //for useContext hook
import { ExercisesContext } from "@/context/ExercisesContext";
import React, { useContext } from "react";
import EmptySelectionCard from "./selectedexercisescards/EmptySelectionCard";
import { IExercise } from "@/types/exercise.type";
import PlannedExerciseCard from "./selectedexercisescards/PlannedExerciseCard";
import SavedExerciseCard from "./selectedexercisescards/SavedExerciseCard";
import { SortContext } from "@/context/SortContext";

const SelectedExercises = () => {
  const {
    currentPlanType,
    plannedExercises,
    savedExercises,
    /* setPlannedExercises,
    setSavedExercises, */
  } = useContext(ExercisesContext);
  const { sortBy } = useContext(SortContext);

  const sortExercises = (commonExercises: IExercise[]): IExercise[] => {
    const tempExercises = [...commonExercises];
    if (sortBy === "Duration")
      tempExercises.sort((a, b) => b.duration - a.duration);
    else if (sortBy === "Calories")
      tempExercises.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    else tempExercises.sort((a, b) => b.rating - a.rating);
    /*
    ERROR: Infinite Re-render Loop
    REASON: calling state setters (setPlannedExercises and setSavedExercises) directly inside the render body.  
    if (currentPlanType == "plan") setPlannedExercises([...tempExercises]);
    else setSavedExercises([...tempExercises]); */
    return [...tempExercises];
  };

  /* if (currentPlanType === "plan") sortExercises(plannedExercises);
  else sortExercises(savedExercises); */
  const currentExercises =
    currentPlanType === "plan" ? plannedExercises : savedExercises;
  const sortedExercises = sortExercises(currentExercises);
  return currentPlanType === "plan" ? (
    <section className="mt-20 flex flex-col gap-4">
      {sortedExercises.length === 0 ? (
        <EmptySelectionCard />
      ) : (
        sortedExercises.map((plannedExercise: IExercise) => {
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
      {sortedExercises.length === 0 ? (
        <EmptySelectionCard />
      ) : (
        sortedExercises.map((savedExercise: IExercise) => {
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
