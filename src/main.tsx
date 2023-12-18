import ReactDOM from "react-dom/client";
import "./index.css";
import { FiltersProvider } from "./context/filtersContext.tsx";
import { Navigation } from "./routes/Navigation.tsx";
import { CartProvider } from "./context/cartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <FiltersProvider>
      <CartProvider>
        <Navigation />
      </CartProvider>
    </FiltersProvider>
  </>,
);
