import { ApiRequest } from "@/apis";
import { useQuery } from "@tanstack/react-query";
import { accessToken } from "@/apis";

const useAuthVerifyHooks =() => {
  return useQuery({
    queryKey: ["Verify"],queryFn:async()=>await ApiRequest("GET", "/auth/me"),
    enabled:accessToken?true:false
  });
};

export default useAuthVerifyHooks;
