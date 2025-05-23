import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "../../constants/Token";

interface PrivateRouterProp {
  children: ReactNode;
}
const PrivateRout = ({ children }: PrivateRouterProp) => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  if (token) {
    return children;
  }
  return <Navigate to={"/login"} />;
};

export default PrivateRout;
