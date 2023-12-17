import App from "../App";
import DetailProduct from "../components/DetailProduct/DetailProduct";
import { DetailCar } from "../pages/DetailCar";
import { Welcome } from "../pages/Welcome";

type JSXComponent = () => JSX.Element;

interface Route {
  to?: string;
  path: string;
  name: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
}

export const routes: Route[] = [
  {
    path: "/welcome",
    Component: Welcome,
    name: "welcome",
    to: "/welcome",
  },
  {
    path: "/shopping",
    Component: App,
    name: "shopping",
    to: "/shopping",
  },
  {
    path: "/product/:id",
    Component: DetailProduct,
    name: "product",
    to: "/product",
  },
  {
    path: "/cart",
    Component: DetailCar,
    name: "cart",
    to: "/cart",
  },
  //   {
  //     path: "/about",
  //     Component: AboutPage,
  //     name: "about",
  //     to: "/about",
  //   },
  //   {
  //     path: "/product/:id",
  //     Component: Product,
  //     name: "about",
  //     to: "/about",
  //   },
];
