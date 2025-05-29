import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useFetch } from "react-hook-essential";
import { axiosInstance } from "../../config/axios.config";
import { apipaths } from "../../config/apiPath";
import CircularProgress from "@mui/material/CircularProgress";
import ErrorMessage from "../Error/ErrorMessage";
import type { RegisterData } from "../../schemas/RegisterSchema";
import { useEffect, useState, type ChangeEvent } from "react";
import ViewTypeRadio from "./ViewTypeRadio";
import { Link, useSearchParams } from "react-router";
import { ERROR } from "../../constants/Errors";
import GoToTop from "../GoToTop/GoToTop";

export type APIData = {
  data: {
    data: RegisterData[];
  };
};
const Products = () => {
  const [searchedValue] = useSearchParams();
  const search = searchedValue.get("search");
  const { data, isLoading, memoizedRefetch, error } = useFetch<APIData>({
    fn: (searchedValue) =>
      axiosInstance.get(apipaths.user.users(), {
        params: { search: searchedValue },
      }),
    enabled: true,
  });
  const [err, setErr] = useState(false);
  const [value, setValue] = useState("card");

  useEffect(() => {
    if (search) {
      memoizedRefetch(search);
    }
  }, [memoizedRefetch, search]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  function generateError() {
    setErr(true);
  }
  if (err) {
    throw new Error(ERROR.USER_GENERATED_ERROR);
  }
  if (error) {
    <ErrorMessage error={error.message} />;
  }
  return (
    <div style={{ width: "100%", textAlign: "center", overflow: "auto" }}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <ViewTypeRadio value={value} handleChange={handleChange} />
          <Grid
            container
            spacing={2}
            sx={{
              display: `${value === "card" ? "flex" : "inline"}`,
              position: "relative",
            }}
          >
            {data?.data.data.map((product) => (
              <Link key={product.username} to={`/products/${product.id}`}>
                <Card sx={{ margin: "0.5rem", textAlign: "center" }}>
                  <CardContent
                    sx={{
                      display: `${value === "list" ? "grid" : "inline"}`,
                      gridTemplateColumns: "repeat(3,1fr)",
                      padding: 0,
                    }}
                  >
                    <Typography variant="subtitle1">
                      {product.username}
                    </Typography>
                    <Typography variant="body1">
                      price: ${product.mobileNumber.substring(0, 4)}
                    </Typography>
                    <Button>Add to cart</Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
            <GoToTop />
          </Grid>
          <Button onClick={generateError}>Generate Error</Button>
        </>
      )}
    </div>
  );
};

export default Products;
