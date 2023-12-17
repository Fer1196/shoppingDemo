import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Product } from "./utils/interfaces/Product";
import { products as initialProducts } from "./mocks/products.json";
import { useFilters } from "./components/Filters/useFilters";
import { GridProducts } from "./components/GridProducts/GridProducts";

function App() {
  const [products] = useState<Product[]>(initialProducts);
  const { filterProducts } = useFilters();
  const filteredProducts: Product[] = filterProducts(products);

  return (
    <>
      <Header />
      <GridProducts products={filteredProducts} />
    </>
  );
}

export default App;
