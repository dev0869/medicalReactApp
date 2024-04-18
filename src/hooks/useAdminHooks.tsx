import { ApiRequest } from "@/apis";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

export const useAdminDeleteHooks = (props: { Route: string|null; refetch: string|null; }) => {
  const {Route,refetch}=props;
  const queryClient=useQueryClient()
  const mutation = useMutation({
    mutationFn: (data) => ApiRequest("DELETE", Route!, data),
    onSuccess:()=>queryClient.invalidateQueries({ queryKey: [refetch] })
  });

  return { mutation };
};


export default useAdminHooks;
