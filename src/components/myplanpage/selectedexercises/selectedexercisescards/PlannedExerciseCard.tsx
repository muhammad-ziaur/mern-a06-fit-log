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
    <div className="container mx-auto px-8 py-3 cursor-pointer rounded-2xl border-2 border-hero-background hover:shadow-sm transition-all hover:shadow-global-subtitle bg-hero-background flex justify-between items-center">
      <section className="flex justify-between items-center gap-2">
        <div className="relative w-48 h-32 min-w-48 overflow-hidden rounded-2xl">
          <Image
            className="object-cover object-center"
            src={plannedExercise.image}
            alt="Exercise Card Image"
            fill
            sizes="20vw"
          />
        </div>
        <div className="flex flex-col">
          <div className="pt-4 px-6">
            <p className="text-global-text text-2xl font-bold uppercase">
              {plannedExercise.name}
            </p>
          </div>

          <div className="pt-1 px-6">
            <p className="text-global-subtitle">{plannedExercise.equipment}</p>
          </div>

          <div className=" whitespace-nowrap text-global-subtitle text-xl font-semibold mx-6 mt-5 pt-3 pb-6 flex items-center gap-4">
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

      <ButtonGroup commonExercise={plannedExercise} />
    </div>
  );
};

export default PlannedExerciseCard;
