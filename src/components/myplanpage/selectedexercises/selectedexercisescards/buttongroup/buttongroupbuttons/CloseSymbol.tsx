"use client";
import { ExercisesContext } from "@/context/ExercisesContext";
import { IExercise } from "@/types/exercise.type";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { IoMdClose } from "react-icons/io";
interface ICloseSymbolProps {
  commonExercise: IExercise;
}
const CloseSymbol = ({ commonExercise }: ICloseSymbolProps) => {
  const {
    currentPlanType,
    plannedExercises,
    setPlannedExercises,
    savedExercises,
    setSavedExercises,
  } = useContext(ExercisesContext);
  const handleCloseSymbol = () => {
    const commonExercises: IExercise[] =
      currentPlanType === "plan" ? plannedExercises : savedExercises;
    const setCommonExercises: Dispatch<SetStateAction<IExercise[]>> =
      currentPlanType === "plan" ? setPlannedExercises : setSavedExercises;
    const decrementedCommonExercises: IExercise[] = commonExercises.filter(
      (elem: IExercise) => elem.id !== commonExercise.id,
    );
    setCommonExercises(decrementedCommonExercises);
  };
  return (
    <div
      className="cursor-pointer text-xl text-global-subtitle font-semibold hover:font-bold hover:text-white"
      onClick={handleCloseSymbol}
    >
      <IoMdClose />
    </div>
  );
};

export default CloseSymbol;
