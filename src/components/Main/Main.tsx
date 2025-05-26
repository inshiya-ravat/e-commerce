import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

function Main() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Main;
