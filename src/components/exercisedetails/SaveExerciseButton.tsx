import { IExercise } from "@/types/exercise.type";
import React from "react";
import { FaRegBookmark } from "react-icons/fa";
interface ISaveExerciseButtonProps {
  exercise: IExercise;
}
const SaveExerciseButton = ({ exercise }: ISaveExerciseButtonProps) => {
  return (
    <button className="cursor-pointer text-details-button-two border border-details-button-two font-semibold flex justify-center items-center gap-2 rounded-xl px-6 py-3">
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
