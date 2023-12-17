import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FiltersProvider } from "./context/filtersContext.tsx";
import DetailProduct from "./components/DetailProduct/DetailProduct.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <FiltersProvider>
    <DetailProduct />
  </FiltersProvider>,
);
