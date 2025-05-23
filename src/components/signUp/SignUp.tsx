import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "react-hook-essential";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { axiosInstance } from "../../config/axios.config";
import { toast, ToastContainer } from "react-toastify";
import { apipaths } from "../../config/apiPath";
import { ERROR } from "../../constants/Errors";
import type { RegisterData } from "../../schemas/RegisterSchema";

export type ApiResponse<T> = {
  data: {
    status: boolean;
    message: string;
    data: T;
  };
};

function SignUp() {
  const { register, handleSubmit } = useForm<RegisterData>();
  const navigate = useNavigate();
  const { error, isLoading, mutate } = useMutation<
    ApiResponse<null>,
    RegisterData
  >({
    fn: (data) => axiosInstance.post(apipaths.auth.signup(), data),
  });

  const onsubmit: SubmitHandler<RegisterData> = async (data) => {
    await mutate(data, (response) => {
      if (response.data.status) {
        navigate("/login");
      } else {
        toast.error(ERROR.REGISTER_UNSUCCESSFUL);
      }
    });
  };

  if (error) {
    toast.error(ERROR.REGISTER_UNSUCCESSFUL);
  }

  return (
    <div>
      <Typography variant="h6">Register</Typography>
      <form onSubmit={handleSubmit(onsubmit)}>
        <FormControl>
          <TextField
            {...register("username")}
            label="enter username"
            margin="normal"
            variant="standard"
          />
          <TextField
            {...register("email")}
            label="enter email"
            margin="normal"
            variant="standard"
          />
          <TextField
            {...register("password")}
            label="enter password"
            margin="normal"
            variant="standard"
          />
          <TextField
            {...register("displayName")}
            label="enter display name"
            margin="normal"
            variant="standard"
          />
          <TextField
            {...register("mobileNumber")}
            label="enter mobile number"
            margin="normal"
            variant="standard"
          />
          <Button loading={isLoading} type="submit" variant="contained">
            Submit
          </Button>
          <FormHelperText id="my-helper-text">
            Already have an acount ? <Link to="/login">Login</Link>{" "}
          </FormHelperText>
        </FormControl>
      </form>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
