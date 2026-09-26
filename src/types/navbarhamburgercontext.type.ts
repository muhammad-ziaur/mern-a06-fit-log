import { Dispatch, SetStateAction } from "react";

export interface INavbarHamburgerContext {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}
