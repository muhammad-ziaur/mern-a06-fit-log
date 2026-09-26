"use client"; //again, event handler er jonno
import { ExercisesContext } from "@/context/ExercisesContext";
import { IExercise } from "@/types/exercise.type";
import React, { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { Slide, toast } from "react-toastify";
interface ISaveExerciseButtonProps {
  exercise: IExercise;
}
const SaveExerciseButton = ({ exercise }: ISaveExerciseButtonProps) => {
  const { savedExercises, setSavedExercises } = useContext(ExercisesContext);
  const handleSaveExercise = () => {
    if (
      savedExercises.find((elem: IExercise) => elem.id === exercise.id) ===
      undefined
    ) {
      // Can be saved
      const incrementedSavedExercises: IExercise[] = [
        ...savedExercises,
        exercise,
      ];
      setSavedExercises(incrementedSavedExercises);
      //TOAST
      toast.success(`${exercise.name} has been added to your SAVED list!`, {
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
    } else {
      //already saved
      //TOAST
      toast.error(`${exercise.name} already exists in your SAVED list!`, {
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
    }
  };
  return (
    <button
      className="cursor-pointer text-details-button-two border border-details-button-two font-semibold flex justify-center items-center gap-2 rounded-xl px-6 py-3"
      onClick={handleSaveExercise}
    >
      <span>
        <FaRegBookmark />
      </span>
      <p>
        <span>{`Save for later`}</span>
      </p>
    </button>
  );
};

export default SaveExerciseButton;
