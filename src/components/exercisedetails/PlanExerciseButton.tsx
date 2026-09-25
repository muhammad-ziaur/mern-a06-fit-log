import { IExercise } from "@/types/exercise.type";
import React from "react";
import { FaRegCalendarPlus } from "react-icons/fa6";
interface IPlanExerciseButtonProps {
  exercise: IExercise;
}
const PlanExerciseButton = ({ exercise }: IPlanExerciseButtonProps) => {
  return (
    <button className="cursor-pointer text-details-button-one bg-button-primary font-semibold flex justify-center items-center gap-2 rounded-xl px-6 py-3">
      <span className="">
        <FaRegCalendarPlus />
      </span>
      <p>
        <span>{`Add to today's plan`}</span>
      </p>
    </button>
  );
};

export default PlanExerciseButton;
