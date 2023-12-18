import "./Cart.css";
import { useId } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { ProductCart } from "../../utils/interfaces/Product.ts";
import { CartItem } from "../CartItem/CartItem.tsx";
import { useCart } from "../../hooks/useCart.tsx";

export interface ProductInfo extends ProductCart {
  addToCart: () => void;
}

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, addToCart, clearCart } = useCart();
  return (
    <>
      <label className="cartShop-button" htmlFor={cartCheckboxId}>
        <ShoppingCartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cartShop">
        <ul>
          {cart.map((product: ProductCart) => {
            return (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                {...product}
              />
            );
          })}
        </ul>
        <button
          onClick={() => {
            clearCart();
          }}
        >
          <RemoveShoppingCartIcon />
        </button>
      </aside>
    </>
  );
}
