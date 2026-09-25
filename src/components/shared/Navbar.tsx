import React from "react";
import NavbarPlanButton from "./navbarbuttons/NavbarPlanButton";
import NavbarSavedButton from "./navbarbuttons/NavbarSavedButton";
import NavbarCenterLinks from "./NavbarCenterLinks";
import NavbarLogo from "./NavbarLogo";
const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 py-6 border-b-2 border-global-border bg-global-background">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Navbar Left Logo */}
        <NavbarLogo />
        {/* Navbar Central Links */}
        <NavbarCenterLinks />
        {/* Navbar Right Buttons */}
        <div className="flex justify-between items-center gap-2.5">
          <NavbarPlanButton />
          <NavbarSavedButton />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
