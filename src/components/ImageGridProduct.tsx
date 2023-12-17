import { useNavigate } from "react-router-dom";

export interface Props {
  image: string;
  id?: number;
}

export const ImageGrid = ({ image, id }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "250px",
        height: "250px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={image}
        style={{
          padding: "10px",
          width: "calc(100% - 20px)",
          borderRadius: "20px",
        }}
        onClick={() => {
          navigate(`/product/${id}`);
        }}
      />
    </div>
  );
};
