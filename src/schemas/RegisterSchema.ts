import z from "zod";
import { VALID } from "../constants/Validations";

export const schema = z.object({
  email: z.string().email(VALID.EMAIL),
  password: z.string().min(6, VALID.PASSWORD),
  displayName: z.string().min(5, VALID.DISPLAY_NAME),
  mobileNumber: z.string().min(10, VALID.MOBILE_NUMBER),
  username: z.string().min(3, VALID.USERNAME),
});
export type RegisterData = z.infer<typeof schema>;
