export interface Props {
  image: string;
}

export const ImageGrid = ({ image }: Props) => {
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
      />
    </div>
  );
};
