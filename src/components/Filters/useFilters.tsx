import { useContext } from "react";
import { FilterContext } from "../../context/filtersContext";
import { Product } from "../../utils/interfaces/Product";

export type Category =
  | "all"
  | "computers"
  | "keyboards"
  | "home-decoration"
  | "smartphones"
  | "fragrances"
  | "skincare"
  | "groceries"
  | "laptops";

export type Refresh = "category" | "price";

export interface Filter {
  category: string;
  price: number;
  searchWord: string;
}

export function useFilters() {
  const { filters, setFilters } = useContext(FilterContext);

  const filterProducts = (products: Product[]) => {
    return products.filter((product: Product) => {
      return (
        product.price >= filters.price &&
        (filters.category === "all" || product.category === filters.category) &&
        (filters.searchWord !== ""
          ? product.title
              .toLowerCase()
              .includes(filters.searchWord.toLowerCase())
          : true)
      );
    });
  };

  return { filters, setFilters, filterProducts };
}
