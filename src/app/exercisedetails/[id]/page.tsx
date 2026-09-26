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

  return (
    <div className="bg-global-background mt-10 md:mt-18 mb-20 md:mb-36 px-4 sm:px-6 md:px-8">
      <section className="container mx-auto grid grid-cols-12 gap-8 lg:gap-20 items-start">
        <div className="lg:col-span-6 col-span-12 lg:sticky lg:top-24">
          <div className="w-full relative aspect-3/4 max-h-150 lg:max-h-none">
            <Image
              className="object-cover object-center rounded-3xl w-full h-full"
              src={ExerciseDetailsData.image}
              alt="Exercise Details Image"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="lg:col-span-6 col-span-12 flex flex-col gap-3.5">
          <h2 className="text-2xl sm:text-3xl text-global-text font-bold uppercase">
            {ExerciseDetailsData.name}
          </h2>
          <p className="text-global-subtitle text-sm sm:text-base leading-relaxed">
            {ExerciseDetailsData.description}
            {/* sampletaillllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll */}
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
            {ExerciseDetailsData.muscleGroups?.map(
              (muscle: string, ind: number) => {
                return (
                  <div
                    key={ind}
                    className="bg-muscle-group rounded-full px-3 sm:px-4 py-1"
                  >
                    <p className="font-semibold text-black text-xs sm:text-sm">
                      {muscle}
                    </p>
                  </div>
                );
              },
            )}
          </div>
          <div className="rounded-2xl bg-card-background flex flex-col border border-global-subtitle text-global-subtitle mt-4">
            <div className="flex flex-col sm:flex-row px-4 sm:px-6 py-3 sm:py-4 justify-between text-sm sm:text-base">
              <p className="uppercase font-semibold">EQUIPMENT</p>
              <p className="text-exercise-details-values text-left sm:text-right">
                {ExerciseDetailsData.equipment}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row px-4 sm:px-6 py-3 sm:py-4 border-t border-global-subtitle justify-between text-sm sm:text-base">
              <p className="uppercase font-semibold">DIFFICULTY</p>
              <p className="text-exercise-details-values text-left sm:text-right">
                {ExerciseDetailsData.difficulty}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row px-4 sm:px-6 py-3 sm:py-4 border-t border-global-subtitle justify-between text-sm sm:text-base">
              <p className="uppercase font-semibold">SETS</p>
              <p className="text-exercise-details-values text-left sm:text-right">
                {ExerciseDetailsData.sets}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row px-4 sm:px-6 py-3 sm:py-4 border-t border-global-subtitle justify-between text-sm sm:text-base">
              <p className="uppercase font-semibold">REPS</p>
              <p className="text-exercise-details-values text-left sm:text-right">
                {ExerciseDetailsData.reps}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row px-4 sm:px-6 py-3 sm:py-4 border-t border-global-subtitle justify-between text-sm sm:text-base">
              <p className="uppercase font-semibold">DURATION</p>
              <p className="text-exercise-details-values text-left sm:text-right">
                {ExerciseDetailsData.duration} min
              </p>
            </div>
            <div className="flex flex-col sm:flex-row px-4 sm:px-6 py-3 sm:py-4 border-t border-global-subtitle justify-between text-sm sm:text-base">
              <p className="uppercase font-semibold">CALORIES</p>
              <p className="text-exercise-details-values text-left sm:text-right">
                {ExerciseDetailsData.caloriesBurned} kcal
              </p>
            </div>
            <div className="flex flex-col sm:flex-row px-4 sm:px-6 py-3 sm:py-4 border-t border-global-subtitle justify-between text-sm sm:text-base">
              <p className="uppercase font-semibold">RATING</p>
              <p className="text-exercise-details-values text-left sm:text-right">
                {ExerciseDetailsData.rating}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-col space-y-4">
            <h3 className="text-lg sm:text-xl uppercase text-global-text font-bold">
              INSTRUCTIONS
            </h3>
            {ExerciseDetailsData.instructions?.map(
              (instruction: string, ind: number) => {
                return (
                  <p
                    key={ind}
                    className="flex items-start gap-3 text-sm sm:text-base"
                  >
                    <span className="text-global-subtitle shrink-0">
                      {ind + 1}.
                    </span>
                    <span className="text-instruction-list">{instruction}</span>
                  </p>
                );
              },
            )}
          </div>
          <div className="flex sm:flex-row flex-col gap-3 mt-8 w-full">
            {/* Custom Button Components */}
            <div>
              <PlanExerciseButton exercise={ExerciseDetailsData} />
            </div>
            <div>
              <SaveExerciseButton exercise={ExerciseDetailsData} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExerciseDetailsPage;
