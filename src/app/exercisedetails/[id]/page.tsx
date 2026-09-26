import { IExercise } from "@/types/exercise.type";
import React from "react";
import Image from "next/image";
import PlanExerciseButton from "@/components/exercisedetails/PlanExerciseButton";
import SaveExerciseButton from "@/components/exercisedetails/SaveExerciseButton";
interface IExerciseDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}
const getExerciseDetails = async (id: string) => {
  try {
    const response = await fetch(
      `https://api.abcz.workers.dev/api/fitlog/${id}`,
      {
        cache: "force-cache",
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Exercise Details:", error);
    return {};
  }
};
const ExerciseDetailsPage = async ({ params }: IExerciseDetailsPageProps) => {
  const { id } = await params;
  const ExerciseDetailsData: IExercise = await getExerciseDetails(id);
  // console.log(ExerciseDetailsData);
  return (
    <div className="bg-global-background mt-18 mb-36">
      <section className="container mx-auto grid grid-cols-12 gap-20">
        <div className="col-span-6 relative w-full">
          <Image
            className="object-cover object-center rounded-3xl"
            src={ExerciseDetailsData.image}
            alt="Exercise Details Image"
            fill
            sizes="50vw"
          />
        </div>

        <div className="col-span-6 flex flex-col gap-3.5">
          <h2 className="text-3xl text-global-text font-bold uppercase">
            {ExerciseDetailsData.name}
          </h2>
          <p className=" text-global-subtitle">
            {ExerciseDetailsData.description}
            {/* sampletaillllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll */}
          </p>
          <div className="flex gap-3 items-center">
            {ExerciseDetailsData.muscleGroups.map(
              (muscle: string, ind: number) => {
                return (
                  <div
                    key={ind}
                    className="bg-muscle-group rounded-full px-4 py-1"
                  >
                    <p className="font-semibold text-black">{muscle}</p>
                  </div>
                );
              },
            )}
          </div>
          <div className="rounded-2xl bg-card-background flex flex-col border border-global-subtitle text-global-subtitle mt-4">
            <div className="flex px-6 py-4 justify-between">
              <p className="uppercase font-semibold">EQUIPMENT</p>
              <p className="text-exercise-details-values">
                {ExerciseDetailsData.equipment}
              </p>
            </div>
            <div className="flex px-6 py-4 border-t border-global-subtitle justify-between">
              <p className="uppercase font-semibold">DIFFICULTY</p>
              <p className="text-exercise-details-values">
                {ExerciseDetailsData.difficulty}
              </p>
            </div>
            <div className="flex px-6 py-4 border-t border-global-subtitle  justify-between">
              <p className="uppercase font-semibold">SETS</p>
              <p className="text-exercise-details-values">
                {ExerciseDetailsData.sets}
              </p>
            </div>
            <div className="flex px-6 py-4 border-t border-global-subtitle  justify-between">
              <p className="uppercase font-semibold">REPS</p>
              <p className="text-exercise-details-values">
                {ExerciseDetailsData.reps}
              </p>
            </div>
            <div className="flex px-6 py-4 border-t border-global-subtitle  justify-between">
              <p className="uppercase font-semibold">DURATION</p>
              <p className="text-exercise-details-values">
                {ExerciseDetailsData.duration} min
              </p>
            </div>
            <div className="flex px-6 py-4 border-t border-global-subtitle  justify-between">
              <p className="uppercase font-semibold">CALORIES</p>
              <p className="text-exercise-details-values">
                {ExerciseDetailsData.caloriesBurned} kcal
              </p>
            </div>
            <div className="flex px-6 py-4 border-t border-global-subtitle  justify-between">
              <p className="uppercase font-semibold">RATING</p>
              <p className="text-exercise-details-values">
                {ExerciseDetailsData.rating}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-col space-y-4">
            <h3 className="text-xl uppercase text-global-text font-bold">
              INSTRUCTIONS
            </h3>
            {ExerciseDetailsData.instructions.map(
              (instruction: string, ind: number) => {
                return (
                  <p key={ind} className="flex items-center gap-3">
                    <span className="text-global-subtitle">{ind + 1}.</span>
                    <span className="text-instruction-list">{instruction}</span>
                  </p>
                );
              },
            )}
          </div>
          <div className="flex gap-5 mt-8">
            {/* Cutsom Button Components */}
            <PlanExerciseButton exercise={ExerciseDetailsData} />
            <SaveExerciseButton exercise={ExerciseDetailsData} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExerciseDetailsPage;
