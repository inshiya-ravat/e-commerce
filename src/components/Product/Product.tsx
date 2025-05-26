import { useFetch } from "react-hook-essential";
import { axiosInstance } from "../../config/axios.config";
import { apipaths } from "../../config/apiPath";
import { useParams } from "react-router";
import { Button, Card, CardContent, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import type { RegisterData } from "../../schemas/RegisterSchema";
import ErrorMessage from "../Error/ErrorMessage";
import { PRODUCT } from "../../constants/Errors";

type RouteParam = {
  id: string;
};
type APIData = {
  data: {
    data: RegisterData;
  };
};
const Product = () => {
  const id = useParams<RouteParam>();
  const response = useFetch<APIData>({
    fn: () => axiosInstance.get(apipaths.user.userById(Number(id.id))),
    enabled: true,
  });
  const product = response.data?.data.data;
  if (product) {
    return (
      <div>
        {response.isLoading ? (
          <CircularProgress />
        ) : (
          <>
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
          </>
        )}
      </div>
    );
  } else {
    <ErrorMessage error={PRODUCT.NOT_FOUND} />;
  }
};

export default Product;
