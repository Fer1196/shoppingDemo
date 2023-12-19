import { useFilters } from "../../../components/Filters/useFilters";
import { Product } from "../../../utils/interfaces/Product";

export function useApp() {
  const { filterProducts } = useFilters();
  const filteredProducts: Product[] = filterProducts();

  return { filteredProducts };
}
