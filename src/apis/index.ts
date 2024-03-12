import axios from "axios";
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
        response = await api.get(url,config);
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
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error as string | undefined);
  }
};
