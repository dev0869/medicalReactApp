import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const useUploadHooks = () => {
  return useMutation({
    mutationKey: ["upload images"],
    onError: () => toast.error("Failed to Upload images"),
    mutationFn: async(files: File[]) => {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append("file", file);
      });
      const res = await axios.post("https://images.deepmart.shop/upload/med", formData);
      return res.data
    },
  });
};

export default useUploadHooks;
