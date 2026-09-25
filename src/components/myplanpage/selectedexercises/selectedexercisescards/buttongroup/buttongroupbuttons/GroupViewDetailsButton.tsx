import Link from "next/link";
import React from "react";
import { IExercise } from "@/types/exercise.type";
interface IGroupViewDetailsButtonProps {
  commonExercise: IExercise;
}
const GroupViewDetailsButton = ({
  commonExercise,
}: IGroupViewDetailsButtonProps) => {
  return (
    <Link href={`/exercisedetails/${commonExercise.id}`}>
      <button className="cursor-pointer text-details-button-two border border-details-button-two font-semibold rounded-full px-6 py-3">
        View Details
      </button>
    </Link>
  );
};

export default GroupViewDetailsButton;
