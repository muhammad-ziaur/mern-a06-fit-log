"use client";
import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavbarHamburgerContext } from "@/context/NavbarHamburgerContext";

const NavbarHamburger = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(NavbarHamburgerContext);

  return (
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="md:hidden flex items-center justify-center text-2xl text-global-text cursor-pointer p-1"
    >
      {isMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
    </button>
  );
};

export default NavbarHamburger;
