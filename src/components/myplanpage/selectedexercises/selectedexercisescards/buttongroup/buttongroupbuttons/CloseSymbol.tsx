"use client";
import { ExercisesContext } from "@/context/ExercisesContext";
import { IExercise } from "@/types/exercise.type";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { Slide, toast } from "react-toastify";

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
    const toastMessage: string = `${commonExercise.name} has been removed from your ${currentPlanType === "plan" ? "PLANNED" : "SAVED"} list!`;
    toast.info(toastMessage, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };

  return (
    <div
      className="cursor-pointer text-lg sm:text-xl text-global-subtitle font-semibold hover:font-bold hover:text-white p-1"
      onClick={handleCloseSymbol}
    >
      <IoMdClose />
    </div>
  );
};

export default CloseSymbol;
