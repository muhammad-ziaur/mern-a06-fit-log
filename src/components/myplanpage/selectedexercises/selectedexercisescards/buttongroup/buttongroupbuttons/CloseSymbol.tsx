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
    let commonExercises: IExercise[];
    let setCommonExercises: Dispatch<SetStateAction<IExercise[]>>;
    if (currentPlanType === "plan") {
      commonExercises = plannedExercises;
      setCommonExercises = setPlannedExercises;
    } else {
      commonExercises = savedExercises;
      setCommonExercises = setSavedExercises;
    }
    const decrementedCommonExercises: IExercise[] = commonExercises.filter(
      (elem: IExercise) => elem.id !== commonExercise.id,
    );
    setCommonExercises(decrementedCommonExercises);
  };
  return (
    <div
      className="cursor-pointer text-global-subtitle font-semibold"
      onClick={handleCloseSymbol}
    >
      <IoMdClose />
    </div>
  );
};

export default CloseSymbol;
