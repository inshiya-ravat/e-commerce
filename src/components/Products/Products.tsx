import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useFetch } from "react-hook-essential";
import { axiosInstance } from "../../config/axios.config";
import { apipaths } from "../../config/apiPath";
import CircularProgress from "@mui/material/CircularProgress";
import ErrorMessage from "../Error/ErrorMessage";
import type { RegisterData } from "../../schemas/RegisterSchema";
type APIData = {
  data: {
    data: RegisterData[];
  };
};
const Products = () => {
  const response = useFetch<APIData>({
    fn: () => axiosInstance.get(apipaths.user.users()),
    enabled: true,
  });
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
        <Grid container spacing={2} sx={{ padding: "2rem" }}>
          {response.data?.data.data.map((product) => (
            <Card key={product.username}>
              <CardContent>
                <Typography variant="subtitle1">
                  {product.displayName}
                </Typography>
                <Typography variant="body1">
                  price: ${product.mobileNumber.substring(0, 4)}
                </Typography>
                <Button>Add to cart</Button>
              </CardContent>
            </Card>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Products;
