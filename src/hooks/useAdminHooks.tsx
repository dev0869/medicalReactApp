import { ApiRequest } from "@/apis";
import { useQuery } from "@tanstack/react-query";

const useAdminHooks =(key:string|string[],Route:string) => {
  return useQuery({
    queryKey: [key],queryFn:async()=>await ApiRequest("GET", Route),
  });
};

export default useAdminHooks;
