import { Stack } from "@mui/material";
import SideBar from "../SideBar/SideBar";
import Products from "../Products/Products";

const Home = () => {
  return (
    <Stack direction="row">
      <SideBar />
      <Products />
    </Stack>
  );
};

export default Home;
