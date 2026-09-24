import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 py-6 border-b-2 border-global-border bg-global-background">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Navbar Left Logo */}
        <Link href={process.env.NEXT_PUBLIC_SERVER_BASE_URL!}>
          <div className="flex gap-3 items-center cursor-pointer">
            <Image src={logo} alt="Navbar logo"></Image>
            <div>
              <p className="text-2xl font-semibold text-global-text uppercase">
                FITLOG
              </p>
            </div>
          </div>
        </Link>
        {/* Navbar Central Links */}
        <div>
          <ul className="flex justify-between items-center gap-4">
            <li>
              <Link
                href={process.env.NEXT_PUBLIC_SERVER_BASE_URL!}
                className="text-global-text"
              >
                Workouts
              </Link>
            </li>
            <li>
              <Link
                href={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL!}/my-plan`}
                className="text-global-text"
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>
        {/* Navbar Right Buttons */}
        <div className="flex justify-between items-center gap-4">
          <button className="rounded-full border-0">
            <Link
              href={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL!}/my-plan`}
              className="text-global-text"
            >
              Plan
            </Link>
          </button>
          <button className="rounded-full border-0">
            <Link
              href={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL!}/my-plan`}
              className="text-global-text"
            >
              Saved
            </Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
