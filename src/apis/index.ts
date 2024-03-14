import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export const accessToken = localStorage.getItem("token");
export const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};

export const api = axios.create({ baseURL: "http://localhost:9001/api/" });
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export const ApiRequest = async <T>(
  method: HttpMethod,
  url: string,
  payload?: T
) => {
  try {
    let response;
    switch (method) {
      case "GET":
        response = await api.get(url, config);
        break;
      case "POST":
        response = await api.post(url, payload);
        break;
      case "PUT":
        response = await api.put(url, payload);
        break;
      case "DELETE":
        response = await api.delete(url);
        break;
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }
    return response.data;
  } catch (error) {
    const myError = error as AxiosError<{ message: string }>;
    toast.error(myError.response?.data.message);
    throw new Error(error as string | undefined);
  }
};
