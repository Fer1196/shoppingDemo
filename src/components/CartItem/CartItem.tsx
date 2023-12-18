import { ProductInfo } from "../../utils/interfaces/Product";

export function CartItem({
  thumbnail,
  price,
  title,
  quantity,
  addToCart,
}: ProductInfo): JSX.Element {
  return (
    <li
      style={{
        borderBottom: "1px solid #444",
        paddingBottom: "16px",
      }}
    >
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>Qty:{quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}
