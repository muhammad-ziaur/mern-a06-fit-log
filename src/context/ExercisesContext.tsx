"use client";
import { IExercise } from "@/types/exercise.type";
import { IExercisesContext } from "@/types/exercisescontext.type";
import { MyPlan } from "@/types/myplanpagetab.type";
import React, { createContext, ReactNode, useState } from "react";

export const ExercisesContext = createContext<IExercisesContext>({
  currentPlanType: "plan",
  setCurrentPlanType: () => {},
  plannedExercises: [],
  setPlannedExercises: () => {},
  savedExercises: [],
  setSavedExercises: () => {},
});

const ExercisesProvider = ({ children }: { children: ReactNode }) => {
  const [currentPlanType, setCurrentPlanType] = useState<MyPlan>("plan");
  const [plannedExercises, setPlannedExercises] = useState<IExercise[]>([]);
  const [savedExercises, setSavedExercises] = useState<IExercise[]>([]);
  // console.log("The ENTIRE APP started within ExercisesContext");
  const sharedData = {
    currentPlanType,
    setCurrentPlanType,
    plannedExercises,
    setPlannedExercises,
    savedExercises,
    setSavedExercises,
  };

  return (
    <ExercisesContext.Provider value={sharedData}>
      {children}
    </ExercisesContext.Provider>
  );
};

export default ExercisesProvider;
