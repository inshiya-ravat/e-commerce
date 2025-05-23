import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRoutProp {
  children: ReactNode;
}
const PrivateRout = ({ children }: PrivateRoutProp) => {
  const token = localStorage.getItem("token");
  if (token) {
    return children;
  }
  return <Navigate to={"/login"} />;
};

export default PrivateRout;
