import { createContext, useState } from "react";
import { Filter } from "../components/Filters/useFilters";
import { Category } from "../components/Filters/Filters";

interface FiltersContext {
  filters: Filter;
  setFilters: (prevState: React.SetStateAction<Filter>) => void;
}

export const FilterContext = createContext<FiltersContext>({
  filters: {
    category: "all",
    price: 0,
  },
  setFilters: () => {},
});

export function FiltersProvider({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  const [filters, setFilters] = useState<Filter>({
    category: "all" as Category,
    price: 0,
  });
  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
