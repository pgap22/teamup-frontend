import { AxiosError } from "axios";

export const throwError = (error) => {
  if (error instanceof AxiosError) {
    throw error.response.data.data.error;
  }
};

export const headers = () => {
  return {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
};
