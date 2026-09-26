"use client"; //event handler er jonno
import { ExercisesContext } from "@/context/ExercisesContext";
import { IExercise } from "@/types/exercise.type";
import React, { useContext } from "react";
import { FaRegCalendarPlus } from "react-icons/fa6";
import { Slide, toast } from "react-toastify";
interface IPlanExerciseButtonProps {
  exercise: IExercise;
}
const PlanExerciseButton = ({ exercise }: IPlanExerciseButtonProps) => {
  const { plannedExercises, setPlannedExercises } =
    useContext(ExercisesContext);
  const handlePlanExercise = () => {
    if (
      plannedExercises.find((elem: IExercise) => elem.id === exercise.id) ===
      undefined
    ) {
      // Can be added
      const incrementedPlannedExercises: IExercise[] = [
        ...plannedExercises,
        exercise,
      ];
      setPlannedExercises(incrementedPlannedExercises);
      //TOAST
      toast.success(`${exercise.name} has been added to your PLANNED list!`, {
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
      //already exists
      //TOAST
      toast.error(`${exercise.name} already exists in your PLANNED list!`, {
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
      className="cursor-pointer text-details-button-one bg-button-primary font-semibold flex justify-center items-center gap-2 rounded-xl px-6 py-3"
      onClick={handlePlanExercise}
    >
      <span>
        <FaRegCalendarPlus />
      </span>
      <p>
        <span>{`Add to today's plan`}</span>
      </p>
    </button>
  );
};

export default PlanExerciseButton;
