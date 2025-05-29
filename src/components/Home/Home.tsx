import { Stack } from "@mui/material";
import SideBar from "../SideBar/SideBar";
import Products from "../Products/Products";

const Home = () => {
  return (
    <Stack direction="row" sx={{ height: "93%" }}>
      <SideBar />
      <Products />
    </Stack>
  );
};

export default Home;
