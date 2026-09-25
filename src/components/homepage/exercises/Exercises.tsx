import ExerciseCard from "@/components/homepage/exercises/ExerciseCard";
import { IExercise } from "@/types/exercise.type";
import React from "react";

const getExercises = async (): Promise<IExercise[]> => {
  try {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog", {
      cache: "force-cache",
    });
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
    <section className="mt-10 mb-20">
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
