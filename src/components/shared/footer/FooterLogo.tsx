"use client";
import { ExercisesContext } from "@/context/ExercisesContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import logo from "@/assets/logo.png";

const FooterLogo = () => {
  const { setInsideHomePage, setInsideMyPlanPage } =
    useContext(ExercisesContext);
  return (
    <Link
      href={process.env.NEXT_PUBLIC_SERVER_BASE_URL!}
      onClick={() => {
        setInsideMyPlanPage(false);
        setInsideHomePage(true);
      }}
    >
      <div className="flex gap-1.5 items-center cursor-pointer">
        <Image src={logo} alt="Footer logo" width={22} height={22}></Image>
        <div>
          <p className="text-2xl font-semibold text-global-text uppercase">
            FITLOG
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FooterLogo;
