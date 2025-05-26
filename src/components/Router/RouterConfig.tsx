import Login from "../Login/Login";
import Main from "../Main/Main";
import Product from "../Product/Product";
import Products from "../Products/Products";
import SignUp from "../signUp/SignUp";

export type RouteItems = {
  path: string;
  element: React.FC;
  children?: RouteItems[];
  index?: boolean;
  isAuth?: boolean;
};

export const routes: RouteItems[] = [
  {
    path: "/",
    element: Main,
    isAuth: true,
    children: [
      {
        path: "",
        element: Products,
        isAuth: true,
      },
      {
        path: "/products",
        element: Products,
        isAuth: true,
      },
      {
        path: "/products/:id",
        element: Product,
        isAuth: true,
      },
    ],
  },
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/register",
    element: SignUp,
  },
];
