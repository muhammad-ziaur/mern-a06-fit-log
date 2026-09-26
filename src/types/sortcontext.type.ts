import { Dispatch, SetStateAction } from "react";
import { SortCriteria } from "./sortcriteria.type";

export interface ISortContext {
  sortBy: SortCriteria;
  setSortBy: Dispatch<SetStateAction<SortCriteria>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
