"use client";

import React, { createContext, useContext, useState } from "react";

interface IFilterContext {
  selectedClassFilter: string[];
  setSelectedClassFilter: (value: string[]) => void;
  poligonRange: number;
  setPoligonRange: (value: number) => void;
}

export const FilterContext = createContext<IFilterContext | null>(null);

const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [poligonRange, setPoligonRange] = useState(0);
  const [selectedClassFilter, setSelectedClassFilter] = useState<string[]>([]);

  return (
    <FilterContext.Provider
      value={{
        selectedClassFilter,
        setSelectedClassFilter,
        poligonRange,
        setPoligonRange,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (context === null) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
