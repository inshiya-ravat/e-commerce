import {
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { axiosInstance } from "../../config/axios.config";
import { apipaths } from "../../config/apiPath";
import { toast } from "react-toastify";
import { useMutation } from "react-hook-essential";
import type { ApiResponse } from "../signUp/SignUp";
import type { LoginData } from "../../schemas/LoginSchema";
import { ERROR } from "../../constants/Errors";

type Token = {
  accessToken: string;
  refreshToken: string;
};

function Login() {
  const { register, handleSubmit } = useForm<LoginData>();
  const navigate = useNavigate();
  const { error, isLoading, mutate } = useMutation<
    ApiResponse<Token>,
    LoginData
  >({
    fn: (data) => axiosInstance.post(apipaths.auth.login(), data),
  });

  const onsubmit: SubmitHandler<LoginData> = async (data) => {
    await mutate(
      {
        username: data.username,
        password: data.password,
        rememberMe: data.rememberMe,
      },
      (response) => {
        if (response.data.status) {
          localStorage.setItem("token", response.data.data.accessToken);
          navigate("/");
        } else {
          toast.error(ERROR.LOGIN_UNSUCCESSFUL);
        }
      },
    );
  };

  if (error) {
    toast.error(ERROR.LOGIN_UNSUCCESSFUL);
  }
  return (
    <div>
      <Typography variant="h6">Login</Typography>
      <FormControl>
        <TextField
          {...register("username")}
          label="enter username"
          margin="normal"
          variant="standard"
        />
        <TextField
          {...register("password")}
          label="enter password"
          margin="normal"
          variant="standard"
        />
        <Stack
          direction={"row"}
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body2">Remember me?</Typography>
          <Checkbox
            aria-label="Remember me?"
            {...register("rememberMe")}
            defaultChecked
          />
        </Stack>
        <Button
          loading={isLoading}
          onClick={handleSubmit(onsubmit)}
          variant="contained"
        >
          Submit
        </Button>
        <FormHelperText id="my-helper-text">
          Don't have an acount ? <Link to="/register">Register</Link>{" "}
        </FormHelperText>
      </FormControl>
    </div>
  );
}

export default Login;
