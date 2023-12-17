import ReactDOM from "react-dom/client";
import "./index.css";
import { FiltersProvider } from "./context/filtersContext.tsx";
import { Navigation } from "./routes/Navigation.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <FiltersProvider>
      <Navigation />
    </FiltersProvider>
  </>,
);
