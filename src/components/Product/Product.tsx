import { Product as ProductInterface } from "../../utils/interfaces/Product";
import { ImageGrid } from "../ImageGridProduct";
import { IconButton } from "../ButtonIcon/ButtonIcon";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Product.css";

export interface Props {
  //product:Product,
  item: ProductInterface;
}

export const Product = ({ item }: Props) => {
  return (
    <div className="product">
      <div className="product-header">
        <span className="header-title">{item.title}</span>
      </div>
      <ImageGrid image={item.thumbnail} id={item.id} />
      <IconButton text="Add" price={item.price} icon={<ShoppingCartIcon />} />
    </div>
  );
};
