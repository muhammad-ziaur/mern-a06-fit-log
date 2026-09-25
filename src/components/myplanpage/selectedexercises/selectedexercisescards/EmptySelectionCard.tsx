"use client";
import { ExercisesContext } from "@/context/ExercisesContext";
import Link from "next/link";
import React, { useContext } from "react";

const EmptySelectionCard = () => {
  const { setInsideHomePage, setInsideMyPlanPage } =
    useContext(ExercisesContext);
  return (
    <section className="container mx-auto rounded-2xl border border-dashed border-global-subtitle bg-empty-selection-card p-20">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl text-global-text font-bold uppercase">
          NOTHING HERE YET
        </h2>
        <p className=" text-global-subtitle mt-2">
          Browse the library and add a lift to get today moving.
        </p>
        <Link
          href={process.env.NEXT_PUBLIC_SERVER_BASE_URL!}
          onClick={() => {
            setInsideHomePage(true);
            setInsideMyPlanPage(false);
          }}
        >
          <button className="cursor-pointer text-details-button-one bg-button-primary font-semibold rounded-xl px-6 py-3 mt-7">
            <p>
              <span>{`Go to workouts`}</span>
            </p>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default EmptySelectionCard;
