import { ApiRequest } from "@/apis";
import { useMutation, useQuery } from "@tanstack/react-query";

const useAdminHooks = (key: string | null | string[], Route: string) => {
  return useQuery({
    queryKey: [key],
    queryFn: async () => await ApiRequest("GET", Route),
  });
};

export const useAdminPostHooks = (Route: string) => { 
  // const client = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data) => await ApiRequest("POST", Route, data),
    // onSuccess: () => {
    //     client.invalidateQueries(['cart'])
    // }
  });
  return { mutation };
};

export default useAdminHooks;
