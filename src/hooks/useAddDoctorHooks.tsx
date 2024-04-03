import { SetStateAction, useState } from "react";

const useAddDoctorHooks = () => {
  const [selectedImages, setSelectedImages] = useState<SetStateAction<string[]>>([]);
  console.log(selectedImages);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const handleImageChange = (event: { target: { files: string } }) => {
    const files = event.target.files;
    setSelectedImages([...selectedImages, ...files]);
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
