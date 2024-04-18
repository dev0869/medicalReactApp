import { ApiRequest } from "@/apis";
import { useMutation, useQuery } from "@tanstack/react-query";

const useAdminHooks = (key: string | null | string[], Route: string) => {
  return useQuery({
    queryKey: [key],
    queryFn: async () => await ApiRequest("GET", Route),
  });
};

export const useAdminPostHooks = (Route: string) => {
  const mutation = useMutation({
    mutationFn: (data) => ApiRequest("POST", Route, data),
  });
  return { mutation };
};

export default useAdminHooks;
