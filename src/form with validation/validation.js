import {z} from "zod";

const loginSchema = z.object({
  email: z.string().email("invalid email address").min(1, "email is requird"),
  password: z
    .string()
    .min(8, "password must be at least 8 characters")
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    }),
});

export { loginSchema };
