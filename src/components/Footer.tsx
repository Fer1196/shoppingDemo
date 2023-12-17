import { useFilters } from "./Filters/useFilters";
import "./Footer.css";

//{ filters }: { filters: FilterItems }
export function Footer() {
  const { filters } = useFilters();

  return (
    <footer className="footer">
      {/* <h4>
        Prueba técnica de React ⚛️ － <span>@midudev</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5> */}
      {JSON.stringify(filters, null, 2)}
    </footer>
  );
}
