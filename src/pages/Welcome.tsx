import { useNavigatePages } from "../hooks/useNavigatePages";

export function Welcome() {
  const { handleNavigation } = useNavigatePages();
  return (
    <>
      <h1>Welcome to Shopping</h1>
      <button
        onClick={() => {
          handleNavigation(`/shopping`);
        }}
      >
        Go Shopping
      </button>
    </>
  );
}
