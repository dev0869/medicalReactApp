import HorizontalLine from "@/components/ui/horizontal-line";
import useAddDoctorHooks from "@/hooks/useAddDoctorHooks";
import useAdminHooks, { useAdminPostHooks } from "@/hooks/useAdminHooks";
import useFilterUserHooks from "@/hooks/useFilterUserHooks";
import { DoctorProps, Facilityprops, HospitalProps } from "@/types";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ErrorMsg from "@/helper/errorMsg";
import SelectOperation from "@/helper/SelectOperation";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
const AddDoctors = () => {
  const { addOperation, lang, setInputValue, inputValue, Operatable } =
    useFilterUserHooks();
  const { data: hospital } = useAdminHooks("getHospital", "hospitals" || "");
  console.log(hospital);
  const [selectedValue, setSelectedValue] = useState<{
    value: string;
    label: string;
  }>();
  const [selectedHospitalValue, setSelectedHospitalValue] = useState<{
    value: string;
    label: string;
  }>();

  const {
    removeVideo,
    removeImage,
    handleVideoChange,
    handleImageChange,
    selectedVideos,
    selectedImages,
  } = useAddDoctorHooks();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DoctorProps>();
  const { isLoading, data: user } = useAdminHooks("getAuth", "auth" || "");

  const { mutation } = useAdminPostHooks("/doctors");

  const [facilities, setFacilities] = useState<Facilityprops[]>([]);
  const [facility, setFacility] = useState<Facilityprops>({
    title: "",
    price: 0,
    description: "",
  });

  const addFacility = () => {
    if (facility.title && facility.price) {
      setFacilities([...facilities, facility]);
      setFacility({ title: "", price: 0, description: "" });
    }
  };

  const onSubmit: SubmitHandler<DoctorProps> = async (data) => {
    const SubmittingData = {
      ...data,
      userId: selectedValue?.value,
      hospitalId: selectedHospitalValue?.value,
    };

    await mutation.mutateAsync(SubmittingData);

    toast.success("Data successFully Submitted");
    reset();
    setSelectedHospitalValue();
    setSelectedValue("");
  };

  if (isLoading) {
    return "Loading";
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-4 space-y-8">
        <div className="w-[80%] flex flex-col rounded-xl shadow-md border-2 mx-auto p-8 justify-center">
          <main>Basic Details</main>
          <hr className="py-2 my-4" />
          <div className="flex gap-4 justify-between">
            <SelectOperation
              name={"User"}
              data={user}
              setSelectedValue={setSelectedValue}
            />
            <div className="w-full">
              <label className="block  mb-2   text-sm font-medium text-gray-900 dark:text-gray-300">
                Experites
              </label>
              <input
                className="shadow-sm p-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  mb-2  w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter Hospital Name"
                {...register("expertise", { required: true })}
              />
              {errors.expertise && <ErrorMsg />}
            </div>
          </div>
          <div className="flex gap-4 justify-between">
            <div className="w-full">
              <label className="block  my-2   text-sm font-medium text-gray-900 dark:text-gray-300">
                Enter Charges
              </label>
              <input
                type="email"
                {...register("charges")}
                className="block  mb-2  p-2 w-full text-sm text-gray-900  rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter Email"
              />
            </div>
            <div className="w-full">
              <SelectOperation
                name={"Hospital"}
                data={hospital}
                setSelectedValue={setSelectedHospitalValue}
              />

              {errors.hospitalContactNumber && <ErrorMsg />}
            </div>
          </div>
          <div>
            <div>
              <label className="block  my-2   text-sm font-medium text-gray-900 dark:text-gray-300">
                Enter Languages
              </label>
              <input
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                className="block  mb-2  p-2 w-full text-sm text-gray-900  rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter Languages"
              />
              {inputValue.trim() !== "" && (
                <Button
                  type="button"
                  onClick={() => addOperation("user", inputValue)}
                >
                  ADD LANGUAGE
                </Button>
              )}
              <Operatable operation={lang} cases="user" />
            </div>
          </div>
          <div className="flex gap-4 justify-between">
            <div className="w-full">
              <label className="block  mb-2   text-sm font-medium text-gray-900 dark:text-gray-300">
                timing
              </label>
              <input
                {...register("timing")}
                className="shadow-sm p-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  mb-2  w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter Charges"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block  mb-2   text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                specialization
              </label>
              <input
                {...register("specialization", {
                  minLength: { value: 3, message: "Minimum three words" },
                })}
                className="shadow-sm p-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  mb-2  w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter Charges"
              />
              {errors.specialization && <ErrorMsg />}
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block  mb-2   text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              description
            </label>
            <textarea
              rows={9}
              {...register("discription")}
              className="shadow-sm p-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  mb-2  w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Enter Hospital Description"
            />
          </div>
        </div>

        <HorizontalLine />

        <div className="w-[80%] flex flex-col rounded-xl shadow-md border-2 mx-auto p-8 justify-center">
          <main>Add Facilities</main>
          <hr className="py-2 my-4" />
          <div className="flex gap-4 justify-between">
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Title
              </label>
              <input
                type="text"
                value={facility.title}
                onChange={(e) =>
                  setFacility({ ...facility, title: e.target.value })
                }
                className="shadow-sm p-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block mb-2 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter Title"
              />
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Price
              </label>
              <input
                type="number"
                value={facility.price}
                onChange={(e) =>
                  setFacility({ ...facility, price: +e.target.value })
                }
                className="shadow-sm p-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block mb-2 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter Price"
              />
            </div>
          </div>
          <textarea
            rows={9}
            value={facility.description}
            onChange={(e) =>
              setFacility({ ...facility, description: e.target.value })
            }
            className="shadow-sm p-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  mb-2  w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Enter Hospital Description"
          />
          <div className="mb-4">
            <button
              type="button"
              onClick={addFacility}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add Facility
            </button>
          </div>
          <div>
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-center justify-between">
                <p>
                  {facility.title} - ${facility.price} - {facility.description}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    setFacilities(facilities.filter((_, i) => i !== index))
                  }
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
        <HorizontalLine />

        <div className="w-[80%] flex flex-col rounded-xl shadow-md border-2 mx-auto p-8 justify-center">
          <main>Gallery</main>
          <hr className="py-2 my-4" />
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="picture">Select Certification To Upload </label>
            <input
              id="picture"
              multiple
              type="file"
              onChange={handleImageChange}
            />
          </div>
          {selectedImages.length > 0 && (
            <>
              <br />

              <div className="flex gap-4  flex-wrap">
                {selectedImages.map((image, index) => (
                  <div
                    key={index}
                    className="flex relative w-[300px] overflow-hidden rounded-lg  items-center"
                  >
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Selected Image ${index + 1}`}
                      className="max-w-xs object-cover h-full"
                    />
                    <button
                      className="absolute bg-red-500 px-6 rounded-lg shadow-md hover:py-4 transition-[0.6s] py-2 top-0 right-0"
                      type="button"
                      onClick={() => removeImage(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
          <div className="grid w-full mt-9 max-w-sm items-center gap-1.5">
            <label htmlFor="video">Videos</label>
            <input
              id="video"
              multiple
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
            />
          </div>
          {selectedVideos.length > 0 && (
            <div className="mt-6">
              {selectedVideos.map((video, index) => (
                <div
                  key={index}
                  className="flex relative overflow-hidden rounded-lg items-center"
                >
                  <video controls width="full">
                    <source
                      src={URL.createObjectURL(video)}
                      type={video.type}
                    />
                    Your browser does not support the video tag.
                  </video>
                  <button
                    className="absolute bg-red-500 px-6 rounded-lg shadow-md hover:py-4 transition-[0.6s] py-2 top-0 right-0"
                    type="button"
                    onClick={() => removeVideo(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-green-500  text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddDoctors;
