"use client";
import React, { createContext, ReactNode, useState } from "react";
import { INavbarHamburgerContext } from "@/types/navbarhamburgercontext.type";

export const NavbarHamburgerContext = createContext<INavbarHamburgerContext>({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
});

export const NavbarHamburgerProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavbarHamburgerContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </NavbarHamburgerContext.Provider>
  );
};
