import { useNavigatePages } from "../hooks/useNavigatePages";
import { CustomizeButton } from "../components/CustomizeButton/CustomizeButton";

export function Welcome() {
  const { handleNavigation } = useNavigatePages();
  return (
    <>
      <h1>Welcome to Shopping</h1>
      <CustomizeButton
        text="Comprar"
        color="#01eac2"
        onclick={() => {
          handleNavigation(`/shopping`);
        }}
      ></CustomizeButton>
    </>
  );
}
