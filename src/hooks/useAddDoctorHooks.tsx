import { SetStateAction, useState } from "react";
import useUploadHooks from "./useUploadHooks";

const useAddDoctorHooks = () => {
  const { mutateAsync } = useUploadHooks();
  const [selectedImages, setSelectedImages] = useState<
    SetStateAction<string[]>
  >([]);
  console.log(selectedImages);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const handleImageChange = async (event: { target: { files: string } }) => {
    const files = event.target.files[0];
    console.log(files);
    setSelectedImages([...selectedImages, ...files]);
    const res = await mutateAsync([files]);
    console.log(res);
  };
  const handleVideoChange = (event: { target: { files: string } }) => {
    const files = event.target.files;
    setSelectedVideos([...selectedVideos, ...files]);
  };

  const removeImage = (indexToRemove: number) => {
    setSelectedImages(
      selectedImages.filter((_, index) => index !== indexToRemove)
    );
  };
  const removeVideo = (indexToRemove: number) => {
    setSelectedVideos(
      selectedVideos.filter((_, index) => index !== indexToRemove)
    );
  };

  return {
    removeVideo,
    removeImage,
    handleVideoChange,
    handleImageChange,
    selectedVideos,
    selectedImages,
  };
};

export default useAddDoctorHooks;
