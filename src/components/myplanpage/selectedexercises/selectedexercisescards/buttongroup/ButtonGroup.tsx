"use client";
import { IExercise } from "@/types/exercise.type";
import React, { useContext } from "react";
import GroupViewDetailsButton from "./buttongroupbuttons/GroupViewDetailsButton";
import { ExercisesContext } from "@/context/ExercisesContext";
import MarkAsDoneButton from "./buttongroupbuttons/MarkAsDoneButton";
import CloseSymbol from "./buttongroupbuttons/CloseSymbol";

interface IButtonGroupProps {
  commonExercise: IExercise;
}

const ButtonGroup = ({ commonExercise }: IButtonGroupProps) => {
  const { currentPlanType } = useContext(ExercisesContext);
  return (
    <section className="flex flex-wrap sm:flex-nowrap justify-start sm:justify-between items-center gap-3 w-full md:w-auto">
      <GroupViewDetailsButton commonExercise={commonExercise} />
      {currentPlanType === "plan" && (
        <MarkAsDoneButton plannedExercise={commonExercise} />
      )}
      <CloseSymbol commonExercise={commonExercise} />
    </section>
  );
};

export default ButtonGroup;
