import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route path={path} element={<Component />}></Route>
        ))}
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
