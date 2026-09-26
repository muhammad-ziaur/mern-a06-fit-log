"use client";
import { ExercisesContext } from "@/context/ExercisesContext";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
const NavbarCenterLinks = () => {
  const {
    insideHomePage,
    insideMyPlanPage,
    setInsideHomePage,
    setInsideMyPlanPage,
  } = useContext(ExercisesContext);

  const pathName = usePathname();

  useEffect(() => {
    // usePathname() returns only '/my-plan' or '/'
    if (pathName === "/my-plan") {
      setInsideMyPlanPage(true);
      setInsideHomePage(false);
    } else if (pathName === "/") {
      setInsideMyPlanPage(false);
      setInsideHomePage(true);
    } else {
      setInsideMyPlanPage(false);
      setInsideHomePage(false);
    }
  }, [pathName, setInsideMyPlanPage, setInsideHomePage]);

  return (
    <section className="flex gap-1 justify-between">
      <Link
        href={process.env.NEXT_PUBLIC_SERVER_BASE_URL!}
        onClick={() => {
          setInsideMyPlanPage(false);
          setInsideHomePage(true);
        }}
        className={`flex justify-center items-center px-4 py-2 rounded-2xl cursor-pointer transition-all duration-200 ${
          insideHomePage === true
            ? "bg-navbar-center-link-background text-muscle-group shadow-sm"
            : "text-global-subtitle hover:text-white"
        }`}
      >
        <p>{`Workouts`}</p>
      </Link>

      <Link
        href={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL!}/my-plan`}
        onClick={() => {
          setInsideMyPlanPage(true);
          setInsideHomePage(false);
        }}
        className={`flex justify-center items-center px-4 py-2 rounded-2xl cursor-pointer transition-all duration-200 ${
          insideMyPlanPage === true
            ? "bg-navbar-center-link-background text-muscle-group shadow-sm"
            : "text-global-subtitle hover:text-white"
        }`}
      >
        <p>{`My Plan`}</p>
      </Link>
    </section>
  );
};

export default NavbarCenterLinks;
