import { ExercisesContext } from "@/context/ExercisesContext";
import { IExercise } from "@/types/exercise.type";
import React, { useContext } from "react";
import { MdDone } from "react-icons/md";

interface IMarkAsDoneButtonProps {
  plannedExercise: IExercise;
}

const MarkAsDoneButton = ({ plannedExercise }: IMarkAsDoneButtonProps) => {
  const { plannedExercises, setPlannedExercises } =
    useContext(ExercisesContext);

  const handleDonePlannedExercise = () => {
    const decrementedPlannedExercises: IExercise[] = plannedExercises.filter(
      (elem: IExercise) => elem.id !== plannedExercise.id,
    );
    setPlannedExercises(decrementedPlannedExercises);
  };

  return (
    <button
      className="cursor-pointer text-details-button-one bg-button-primary font-semibold flex justify-center items-center gap-2 rounded-full px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm whitespace-nowrap"
      onClick={handleDonePlannedExercise}
    >
      <span>
        <MdDone />
      </span>
      <p>
        <span>{`Mark as Done`}</span>
      </p>
    </button>
  );
};

export default MarkAsDoneButton;
