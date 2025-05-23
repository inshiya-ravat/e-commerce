import z from "zod";
import { VALID } from "../constants/Validations";

export const schema = z.object({
  username: z.string().min(3, VALID.USERNAME),
  password: z.string().min(6, VALID.PASSWORD),
  rememberMe: z.boolean(),
});
export type LoginData = z.infer<typeof schema>;
