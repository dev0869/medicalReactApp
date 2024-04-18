// feedback,status,interpreter,arrivalDate,departureDate,arrival,departure,userId

import SelectOperation from "@/helper/SelectOperation";
import useAdminHooks, { useAdminPostHooks } from "@/hooks/useAdminHooks";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TripProps } from "@/types";
import { toast } from "react-toastify";

const Trips = () => {
  const { register, handleSubmit } = useForm();
  const { data: interpreter } = useAdminHooks(
    "getInterpreter",
    "interpreters" || ""
  );
  const { data: me } = useAdminHooks("auth", "auth/me" || "");
  const { mutation } = useAdminPostHooks("/trip");

  const [interPreterValue, setInterPreterValue] = useState<{
    value: string;
    label: string;
  }>();

  const onSubmit: SubmitHandler<TripProps> = async (data) => {
    const SubmittingData = {
      ...data,
      userId: me._id,
      interpreter: interPreterValue?.value,
    };
    console.log(SubmittingData);
    await mutation.mutateAsync(SubmittingData);
    toast.success("Appointment successFully Submitted");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col px-8 py-4 space-y-8"
    >
      <div className="w-[80%] flex flex-col rounded-xl shadow-md border-2 mx-auto p-8 justify-center">
        <main>Add Trips</main>
        <hr className="py-2 my-4" />

        <div className="flex gap-4 justify-between">
          <div className="w-full">
            <SelectOperation
              name={"InterPreter"}
              data={interpreter}
              setSelectedValue={setInterPreterValue}
            />
          </div>
        </div>
        <div className=" gap-4 justify-between">
          <div className="w-full">
            <span>Add Departure</span>

            <input
              className="shadow-sm p-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  mb-2  w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              type="text"
              {...register("departure")}
            />
          </div>
          <div className="w-full">
            <span>Add Arrival</span>

            <input
              className="shadow-sm p-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  mb-2  w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              type="text"
              {...register("arrival")}
            />
          </div>
        </div>
        <div className=" gap-4 justify-between">
          <div className="w-full">
            <span>Add status</span>

            <input
              className="shadow-sm p-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  mb-2  w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              type="text"
              {...register("status")}
            />
          </div>
          <div className="w-full">
            <span>Add FeedBack</span>

            <textarea
              className="shadow-sm p-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  mb-2  w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              {...register("feedback")}
            />
          </div>
        </div>

        <div className="flex gap-4 justify-between">
          <div className="w-full">
            <span>Add arrivalDate</span>

            <input
              className="shadow-sm p-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  mb-2  w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              type="date"
              {...register("arrivalDate")}
            />
          </div>
          <div className="w-full">
            <span>Add departureDate</span>

            <input
              className="shadow-sm p-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  mb-2  w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              type="date"
              {...register("departureDate")}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="bg-green-500  w-[10%] mx-auto text-white px-4 py-2 rounded-md hover:bg-green-600"
      >
        Submit
      </button>
    </form>
  );
};

export default Trips;
