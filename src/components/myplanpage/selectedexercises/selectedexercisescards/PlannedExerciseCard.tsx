import { IExercise } from "@/types/exercise.type";
import Image from "next/image";
import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { TbFlameFilled } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa6";
import ButtonGroup from "./buttongroup/ButtonGroup";

interface IPlannedExerciseCardProps {
  plannedExercise: IExercise;
}

const PlannedExerciseCard = ({
  plannedExercise,
}: IPlannedExerciseCardProps) => {
  return (
    <div className="w-full cursor-pointer rounded-2xl border-2 border-hero-background hover:shadow-sm transition-all hover:shadow-global-subtitle bg-hero-background flex flex-col md:flex-row justify-between items-start md:items-center p-4 sm:p-6 gap-4 md:gap-6">
      <section className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
        <div className="relative w-full sm:w-48 h-48 sm:h-32 min-w-full sm:min-w-48 overflow-hidden rounded-xl sm:rounded-2xl">
          <Image
            className="object-cover object-center"
            src={plannedExercise.image}
            alt="Exercise Card Image"
            fill
            sizes="(max-width: 640px) 100vw, 20vw"
          />
        </div>
        <div className="flex flex-col w-full">
          <div>
            <p className="text-global-text text-xl sm:text-2xl font-bold uppercase">
              {plannedExercise.name}
            </p>
          </div>

          <div className="pt-1">
            <p className="text-global-subtitle text-sm sm:text-base">
              {plannedExercise.equipment}
            </p>
          </div>

          <div className="whitespace-nowrap text-global-subtitle text-sm sm:text-xl font-semibold mt-4 sm:mt-5 pt-3 pb-2 sm:pb-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-muscle-group">
                <FaRegClock />
              </span>
              <p>{plannedExercise.duration + " "}min</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muscle-group">
                <TbFlameFilled />
              </span>
              <p>{plannedExercise.caloriesBurned + " "}kcal</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muscle-group">
                <FaRegStar />
              </span>
              <p>{plannedExercise.rating}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full md:w-auto flex justify-start md:justify-end">
        <ButtonGroup commonExercise={plannedExercise} />
      </div>
    </div>
  );
};

export default PlannedExerciseCard;
