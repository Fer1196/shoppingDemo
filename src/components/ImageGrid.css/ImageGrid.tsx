import { useNavigate } from "react-router-dom";
import "./ImageGrid.css";

export interface Props {
  image: string;
  id?: number;
}

export const ImageGrid = ({ image, id }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="image-div">
      <img
        src={image}
        onClick={() => {
          navigate(`/product/${id}`);
        }}
      />
    </div>
  );
};
