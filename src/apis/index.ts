import { Config } from "@/types";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export const accessToken: string | null = localStorage.getItem("token");

export const config: Config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};

export const api = axios.create({ baseURL: "http://192.168.1.4:9001/api/" });
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
        response = await api.post(url, payload, config);
        break;
      case "PUT":
        response = await api.put(url, payload);
        break;
      case "DELETE":
        response = await api.delete(url,config);
        break;
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }
    return response.data;
  } catch (error) {
    const myError = error as AxiosError<{ message: string }>;
    if (myError.response?.data.message === "jwt expired") {
      localStorage.removeItem("token");
    }

    toast.error(myError.response?.data.message);
    throw new Error(error as string | undefined);
  }
};
