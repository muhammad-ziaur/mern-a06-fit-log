"use client";
import { ExercisesContext } from "@/context/ExercisesContext";
import { NavbarHamburgerContext } from "@/context/NavbarHamburgerContext";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";

const NavbarCenterLinks = ({ isMobile = false }: { isMobile?: boolean }) => {
  const {
    insideHomePage,
    insideMyPlanPage,
    setInsideHomePage,
    setInsideMyPlanPage,
  } = useContext(ExercisesContext);
  const { setIsMenuOpen } = useContext(NavbarHamburgerContext);

  const pathName = usePathname();

  useEffect(() => {
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

  const handleLinkClick = (isHome: boolean) => {
    setInsideMyPlanPage(!isHome);
    setInsideHomePage(isHome);
    if (isMobile) setIsMenuOpen(false);
  };

  return (
    <section
      className={
        isMobile
          ? "flex flex-col gap-2 w-full"
          : "hidden md:flex gap-1 justify-between"
      }
    >
      <Link
        href="/"
        onClick={() => handleLinkClick(true)}
        className={`flex justify-center items-center px-4 py-2 rounded-2xl cursor-pointer transition-all duration-200 ${
          insideHomePage === true
            ? "bg-navbar-center-link-background text-muscle-group shadow-sm"
            : "text-global-subtitle hover:text-white"
        }`}
      >
        <p>{`Workouts`}</p>
      </Link>

      <Link
        href="/my-plan"
        onClick={() => handleLinkClick(false)}
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
