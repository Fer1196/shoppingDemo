import "./Filters.css";
import { Category } from "@mui/icons-material";
import { Filter, useFilters } from "./useFilters";
import { ChangeEvent, useId } from "react";

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

export function Filters() {
  const minPriceFilterId = useId();
  const categoryFilterId = useId();
  const { filters, setFilters } = useFilters();

  const handlePriceCounter = (event: ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState: Filter) => ({
      ...prevState,
      price: parseInt(event.target.value, 10),
    }));
  };

  const handleCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevState: Filter) => ({
      ...prevState,
      category: event.target.value as Category,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          id={minPriceFilterId}
          type="range"
          step={20}
          min={0}
          max={1000}
          onChange={handlePriceCounter}
          value={filters.price}
          style={{
            width: "400px",
          }}
        />
        <span>$ {filters.price}</span>
      </div>
      <div>
        <label>Search</label>
        <input type="text" placeholder="search" />
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select
          id={categoryFilterId}
          onChange={handleCategory}
          value={filters.category}
        >
          <option value="all">all</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Mobiles</option>
          <option value="keyboards">Keyboards</option>
        </select>
      </div>
    </section>
  );
}
