import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { NotFound } from "../pages/NotFound";
export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, Component, name }) => (
          <Route key={name} path={path} element={<Component />}></Route>
        ))}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
