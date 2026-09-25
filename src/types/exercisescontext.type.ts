import { Dispatch, SetStateAction } from "react";
import { IExercise } from "./exercise.type";

export interface IExercisesContext {
  plannedExercises: IExercise[];
  setPlannedExercises: Dispatch<SetStateAction<IExercise[]>>;
  savedExercises: IExercise[];
  setSavedExercises: Dispatch<SetStateAction<IExercise[]>>;
}
