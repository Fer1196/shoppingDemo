// import ReactDOM from "react-dom/client";
import "./index.css";
import { FiltersProvider } from "./context/filtersContext.tsx";
import { Navigation } from "./routes/Navigation.tsx";
import { CartProvider } from "./context/cartContext.tsx";

import ReactDOM from "react-dom";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <>
//     <FiltersProvider>
//       <CartProvider>
//         <Toaster richColors />
//         <Navigation />
//       </CartProvider>
//     </FiltersProvider>
//   </>,
// );

ReactDOM.render(
  <>
    <FiltersProvider>
      <CartProvider>
        {/* <Toaster richColors /> */}
        <Navigation />
      </CartProvider>
    </FiltersProvider>
  </>,
  document.getElementById("root"),
);
