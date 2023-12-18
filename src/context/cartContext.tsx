import { createContext, useState } from "react";
import { Product, ProductCart } from "../utils/interfaces/Product";

interface CartContextInterface {
  cart: ProductCart[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextInterface>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export function CartProvider({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  const [cart, setCart] = useState<ProductCart[]>([]);
  const addToCart = (product: Product) => {
    const productInCartIndex = cart.findIndex(
      (item: ProductCart) => item.id === product.id,
    );

    if (productInCartIndex >= 0) {
      const newCart: ProductCart[] = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const removeFromCart = (prodduct: Product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== prodduct.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
