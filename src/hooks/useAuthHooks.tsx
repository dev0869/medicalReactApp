import { ApiRequest } from "@/apis";
import { useQuery } from "@tanstack/react-query";

const useAuthVerifyHooks =() => {
  return useQuery({
    queryKey: ["Verify"],queryFn:async()=>await ApiRequest("GET", "/auth/me")
  });
};

export default useAuthVerifyHooks;
