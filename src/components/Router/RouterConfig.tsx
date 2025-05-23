import Login from "../Login/Login";
import Main from "../Main/Main";
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
