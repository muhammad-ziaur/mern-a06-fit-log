import { Dispatch, SetStateAction } from "react";
import { IExercise } from "./exercise.type";
import { MyPlan } from "./myplanpagetab.type";

export interface IExercisesContext {
  insideHomePage: boolean;
  setInsideHomePage: Dispatch<SetStateAction<boolean>>;
  insideMyPlanPage: boolean;
  setInsideMyPlanPage: Dispatch<SetStateAction<boolean>>;
  currentPlanType: MyPlan;
  setCurrentPlanType: Dispatch<SetStateAction<MyPlan>>;
  plannedExercises: IExercise[];
  setPlannedExercises: Dispatch<SetStateAction<IExercise[]>>;
  savedExercises: IExercise[];
  setSavedExercises: Dispatch<SetStateAction<IExercise[]>>;
}
