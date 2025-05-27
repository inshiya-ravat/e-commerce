import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useFetch } from "react-hook-essential";
import { axiosInstance } from "../../config/axios.config";
import { apipaths } from "../../config/apiPath";
import CircularProgress from "@mui/material/CircularProgress";
import ErrorMessage from "../Error/ErrorMessage";
import type { RegisterData } from "../../schemas/RegisterSchema";
import { useState, type ChangeEvent } from "react";
import ViewTypeRadio from "./ViewTypeRadio";
import { Link } from "react-router";
import { ERROR } from "../../constants/Errors";

export type APIData = {
  data: {
    data: RegisterData[];
  };
};
const Products = () => {
  const response = useFetch<APIData>({
    fn: () => axiosInstance.get(apipaths.user.users()),
    enabled: true,
  });
  const [err, setErr] = useState(false);
  const [value, setValue] = useState("card");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  function generateError() {
    setErr(true);
  }
  if (err) {
    throw new Error(ERROR.USER_GENERATED_ERROR);
  }
  if (response.error) {
    if (response.error instanceof Error) {
      <ErrorMessage error={response.error.message} />;
    }
  }
  return (
    <div>
      {response.isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <ViewTypeRadio value={value} handleChange={handleChange} />
          <Grid
            container
            spacing={2}
            sx={{
              padding: "2rem",
              display: `${value === "card" ? "flex" : "inline"}`,
            }}
          >
            {response.data?.data.data.map((product) => (
              <Link key={product.username} to={`/products/${product.id}`}>
                <Card sx={{ margin: "0.5rem" }}>
                  <CardContent
                    sx={{
                      display: `${value === "list" ? "grid" : "inline"}`,
                      gridTemplateColumns: "repeat(3,1fr)",
                      padding: "2rem",
                    }}
                  >
                    <Typography variant="subtitle1">
                      {product.displayName}
                    </Typography>
                    <Typography variant="body1">
                      price: ${product.mobileNumber.substring(0, 4)}
                    </Typography>
                    <Button>Add to cart</Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </Grid>
          <Button onClick={generateError}>Generate Error</Button>
        </>
      )}
    </div>
  );
};

export default Products;
