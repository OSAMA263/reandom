import { Button, Field, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "./validation";
import { getAuth } from "./useLogin";

export default function FormComp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  // onsubmit handler
  const onSubmit = async (data) => {
    await getAuth(data);
  };

  return (
    <div className="flex items-center justify-center h-dvh w-full">
      <form
        className="flex flex-col gap-y-4 w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        {form_inps.map(({ name, type, label }) => (
          <Field.Root invalid={!!errors[name]} key={name}>
            <Field.Label>{label}</Field.Label>
            <Input {...{ name, type, ...register(name) }} />
            <Field.ErrorText>{errors[name]?.message}</Field.ErrorText>
          </Field.Root>
        ))}
        <Button type="submit" loading={isSubmitting} loadingText={"loading..."}>
          submit
        </Button>
      </form>
    </div>
  );
}

const form_inps = [
  { name: "email", type: "email", label: "Enter email" },
  { name: "password", type: "password", label: "Enter your Password" },
];
