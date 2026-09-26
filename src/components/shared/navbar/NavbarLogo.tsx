"use client";
import { ExercisesContext } from "@/context/ExercisesContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import logo from "@/assets/logo.png";

const NavbarLogo = () => {
  const { setInsideHomePage, setInsideMyPlanPage } =
    useContext(ExercisesContext);
  return (
    <Link
      href="/"
      onClick={() => {
        setInsideMyPlanPage(false);
        setInsideHomePage(true);
      }}
    >
      <div className="flex gap-2 items-center cursor-pointer">
        <Image src={logo} alt="Navbar logo" width={27} height={27}></Image>
        <div>
          <p className="text-3xl font-semibold text-global-text uppercase">
            FITLOG
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NavbarLogo;
