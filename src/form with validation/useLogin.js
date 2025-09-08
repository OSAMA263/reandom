import { toaster } from "../components/ui/toaster";
import { api, LOG_IN } from "../apis/urls";

export const getAuth = async ({ email, password }) => {
  const toast = (message = "blank") =>
    toaster.create({
      placement: "top-end",
      max: 4,
      duration: 5000,
      type: "error",
      title: message,
    });

  try {
    const res = await api.post(LOG_IN, { email, password });
    localStorage.setItem("token", res?.data?.token);
  } catch (err) {
    toast(err?.response?.data.message);
  }
};
