"use client";
import { ISortContext } from "@/types/sortcontext.type";
import { SortCriteria } from "@/types/sortcriteria.type";
import React, { createContext, ReactNode, useState } from "react";

export const SortContext = createContext<ISortContext>({
  sortBy: "Duration",
  setSortBy: () => {},
  isOpen: false,
  setIsOpen: () => {},
});

const SortProvider = ({ children }: { children: ReactNode }) => {
  const [sortBy, setSortBy] = useState<SortCriteria>("Duration");
  const [isOpen, setIsOpen] = useState(false);
  const sharedData = {
    sortBy,
    setSortBy,
    isOpen,
    setIsOpen,
  };

  return (
    <SortContext.Provider value={sharedData}>{children}</SortContext.Provider>
  );
};

export default SortProvider;
