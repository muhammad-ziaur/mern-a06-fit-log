import ExerciseCard from "@/components/homepage/exercises/ExerciseCard";
import { IExercise } from "@/types/exercise.type";
import React from "react";

const getExercises = async (): Promise<IExercise[]> => {
  try {
    const response = await fetch(
      "https://api.api-store.workers.dev/api/fitlog",
      {
        cache: "force-cache",
      },
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "Error fetching Exercises data from External Backend:",
      error,
    );
    return [];
  }
};

const Exercises = async () => {
  const exercisesData = await getExercises();
  return (
    <section className="mt-10 mb-20 md:mb-50 px-4 sm:px-6 md:px-8 container mx-auto">
      {/* all exercises cards to be displayed */}
      <div className="grid grid-cols-12 gap-6">
        {exercisesData.map((exercise: IExercise) => {
          return <ExerciseCard key={exercise.id} exercise={exercise} />;
        })}
      </div>
    </section>
  );
};

export default Exercises;
