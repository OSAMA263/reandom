import { z } from "zod";

export const formSchema = z
  .object({
    fn: z.string().min(1, "that shit is required"),
    ln: z.string().nonempty("that shit is also required"),
    email: z.string().min(1, "required").email("invalid email"),
    password: z
      .string()
      .nonempty("required shiter")
      .min(8, "8 chart min")
      .max(9, "9 chart max xdd")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "# and A adn num"
      ),
    cpassword: z.string(""),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "password dosnt match",
    path: ["cpassword"],
  });
