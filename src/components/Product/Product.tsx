import { Product as ProductInterface } from "../../utils/interfaces/Product";
import { ImageGrid } from "../ImageGrid.css/ImageGrid";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Product.css";
import { useCart } from "../../hooks/useCart";

export interface Props {
  item: ProductInterface;
}

export const Product = ({ item }: Props) => {
  const { addToCart } = useCart();
  return (
    <div className="product">
      <div className="product-header">
        <span className="header-title">{item.title}</span>
      </div>
      <ImageGrid image={item.thumbnail} id={item.id} />
      <div className="flex">
        <span className="label-price">${item.price}</span>

        <button
          onClick={() => {
            addToCart(item);
          }}
        >
          <ShoppingCartIcon />
        </button>
      </div>
    </div>
  );
};
