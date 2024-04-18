import SelectOperation from "@/helper/SelectOperation";
import useAdminHooks, { useAdminPostHooks } from "@/hooks/useAdminHooks";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AppointementProps } from "@/types";
import { toast } from "react-toastify";

const Appointments = () => {
  const { register, handleSubmit } = useForm();
  const { data: hospital } = useAdminHooks("getHospital", "hospitals" || "");
  const { data: doctor } = useAdminHooks("getDoctor", "Doctors" || "");

  const { mutation } = useAdminPostHooks("/Doctors");

  const [selectedHospitalValue, setSelectedHospitalValue] = useState<{
    value: string;
    label: string;
  }>();
  const [selectedDoctorValue, setSelectedDoctorlValue] = useState<{
    value: string;
    label: string;
  }>();

  const onSubmit: SubmitHandler<AppointementProps> = async (data) => {
    const SubmittingData = {
  
      time:data.appointmentTime +','+ data.appointmentDate,
      doctorId: selectedDoctorValue?.value,
      hospitalId: selectedHospitalValue?.value,
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
        <main>Add Appointment</main>
        <hr className="py-2 my-4" />

        <div className="flex gap-4 justify-between">
          <div className="w-full">
            <SelectOperation
              name={"Hospital"}
              data={hospital}
              setSelectedValue={setSelectedHospitalValue}
            />
          </div>
          <div className="w-full">
            <SelectOperation
              name={"Doctors"}
              data={doctor}
              setSelectedValue={setSelectedDoctorlValue}
            />
          </div>
        </div>
        <div className="my-4">
          <span>Select Appointment Time</span>
        </div>
        <div className="flex gap-4 justify-between">
          <div className="w-full">
            <input
              className="shadow-sm p-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  mb-2  w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              type="date"
              {...register("appointmentDate")}
            />
          </div>
          <div className="w-full">
            <input
              className="shadow-sm p-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  mb-2  w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              type="time"
              {...register("appointmentTime")}
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

export default Appointments;
