import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center bg-global-background px-4 text-center">
      <div className="flex flex-col items-center gap-6 max-w-lg mx-auto">
        <h1 className="text-7xl md:text-9xl font-black text-global-text">
          404
        </h1>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Page Not Found
          </h2>
          <p className="text-global-subtitle text-base md:text-lg">
            We tried for too long, but it seems nothing appears
          </p>
        </div>

        <div className="mt-4">
          <Link href={process.env.NEXT_PUBLIC_SERVER_BASE_URL!}>
            <button className="cursor-pointer px-8 py-3 rounded-full bg-button-primary text-details-button-one font-semibold shadow-lg hover:-translate-y-0.5 active:translate-y-0.5 hover:font-bold transition-all">
              Back to Workouts
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
