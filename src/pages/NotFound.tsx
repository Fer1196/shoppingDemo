import { useNavigatePages } from "../hooks/useNavigatePages";

export function NotFound() {
  const { handleNavigation } = useNavigatePages();
  return (
    <>
      <h1>Te equivocaste de URL</h1>
      <h2>Creo que te hace falta un cafe</h2>

      <h3>Para comprar esta tasa o más productos da click en la img </h3>

      <img
        onClick={() => handleNavigation("/")}
        src="../../assets/coffee-mug.png"
        style={{
          width: "400px",
        }}
      ></img>
    </>
  );
}
