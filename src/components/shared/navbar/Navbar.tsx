"use client";
import React, { useContext } from "react";
import NavbarPlanButton from "./navbarbuttons/NavbarPlanButton";
import NavbarSavedButton from "./navbarbuttons/NavbarSavedButton";
import NavbarCenterLinks from "./NavbarCenterLinks";
import NavbarLogo from "./NavbarLogo";
import NavbarHamburger from "./NavbarHamburger";
import { NavbarHamburgerContext } from "@/context/NavbarHamburgerContext";

const Navbar = () => {
  const { isMenuOpen } = useContext(NavbarHamburgerContext);

  return (
    <div className="backdrop-blur-3xl sticky top-0 z-50 py-6 border-b-2 border-global-border bg-global-background">
      {isMenuOpen && (
        <div className="backdrop-blur-3xl md:hidden absolute top-full left-0 w-full bg-global-background/95 border-b-2 border-global-border px-4 py-6 shadow-2xl z-40 transition-all">
          <div className="container mx-auto flex flex-col gap-4">
            <NavbarCenterLinks isMobile={true} />
          </div>
        </div>
      )}
      <nav className="container mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center relative">
        <div className="flex items-center gap-3">
          <NavbarHamburger />
          <NavbarLogo />
        </div>

        <NavbarCenterLinks />

        <div className="flex justify-between items-center gap-1">
          <NavbarPlanButton />
          <NavbarSavedButton />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
