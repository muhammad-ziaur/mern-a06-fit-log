import { IExercise } from "@/types/exercise.type";
import Image from "next/image";
import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { TbFlameFilled } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa6";
import Link from "next/link";
interface IExerciseCardProp {
  exercise: IExercise;
}
const ExerciseCard = ({ exercise }: IExerciseCardProp) => {
  // console.log(exercise.id);
  return (
    <Link
      href={`/exercisedetails/${exercise.id}`}
      className="col-span-4 cursor-pointer rounded-2xl border border-global-subtitle hover:border-muscle-group hover:shadow-lg hover:shadow-amber-400 hover:-translate-y-1.5 active:translate-y-1.5 transition-all bg-card-background flex flex-col overflow-hidden w-full h-auto"
    >
      <div className="relative w-full aspect-video">
        <Image
          className="object-cover object-center"
          src={exercise.image}
          alt="Exercise Card Image"
          fill
          sizes="33vw"
        />
      </div>

      <div className="flex gap-2 items-center pt-6 px-6">
        {exercise.muscleGroups.map((muscle: string, ind: number) => {
          return (
            <div key={ind} className="bg-muscle-group rounded-full px-3 py-1">
              <p className="font-bold text-black uppercase">{muscle}</p>
            </div>
          );
        })}
      </div>

      <div className="pt-4 px-6">
        <p className="text-global-text text-2xl font-bold uppercase">
          {exercise.name}
        </p>
      </div>
      <div className="pt-1 px-6">
        <p className="text-global-subtitle">{exercise.equipment}</p>
      </div>
      <div className="border-t border-global-subtitle text-global-subtitle text-xl font-semibold mx-6 mt-5 pt-3 pb-6 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span>
            <FaRegClock />
          </span>
          <p>{exercise.duration + " "}min</p>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <TbFlameFilled />
          </span>
          <p>{exercise.caloriesBurned + " "}kcal</p>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <FaRegStar />
          </span>
          <p>{exercise.rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default ExerciseCard;
