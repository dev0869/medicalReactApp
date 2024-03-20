import useAdminHooks from "@/hooks/useAdminHooks";
import { useParams } from "react-router-dom";
import {
  HotelIcon,
  PhoneIcon,
  HeartIcon,
  MailIcon,
  MapPinIcon,
} from "lucide-react";
import React, {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";
import DoctorCard, { DoctorDataProps } from "@/components/ui/doctorCard";
// import { Doctorcardui } from "./doctor";
const HospitalDetails = () => {
  const { id } = useParams();
  const { data, isFetching } = useAdminHooks(
    `getHospital${id}`,
    `/hospitals/${id}`
  );

  if (isFetching) {
    return "loader";
  }
  return (
    <>
      <div className="bg-gray-50 relative py-6 lg:py-12">
        <div className="container px-4 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {data.hospital.hospitalName}
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                {data.hospital.specialization}
              </p>
              <p className="max-w-[700px]  text-gray-500 md:text-xl dark:text-gray-400">
                {data.hospital.discription}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <HotelIcon className="w-6 h-6" />
                <span className="text-sm font-medium">
                  {data.hospital.address}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-6 h-6" />
                <a className="text-sm font-medium underline" href="#">
                  Call {data.hospital.hospitalContactNumber}
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="St. Joseph's Hospital"
              className="aspect-[2/1] rounded-lg object-cover overflow-hidden"
              height="250"
              src="/placeholder.svg"
              width="500"
            />
          </div>
        </div>
      </div>

      <section className="py-12 lg:py-24">
        <div className="container px-4 space-y-12">video</div>
      </section>
      <section className="border-t border-b py-12 lg:py-24">
        <div className="container px-4 space-y-12">
          <div className="flex flex-col items-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Fascilities
            </h2>
            <p className="max-w-[700px] text-center text-gray-500 md:text-xl dark:text-gray-400">
              {data.hospital.hospitalName} offers a comprehensive range of
              medical services to meet the healthcare needs of our community.
              From primary care to specialized treatments, we are here to help
              you stay healthy and well.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.hospital.facilities.map(
              (
                facility: {
                  title:
                    | string
                    | number
                    | boolean
                    | ReactElement<string | JSXElementConstructor<string>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | Iterable<ReactNode>
                    | null
                    | undefined;
                },
                fcid: Key | null | undefined
              ) => {
                return (
                  <div
                    key={fcid}
                    className="flex flex-col items-center space-y-2"
                  >
                    <HeartIcon className="w-12 h-12" />
                    <h3 className="text-2xl font-bold tracking-tighter">
                      {facility.title}
                    </h3>
                    <p className="text-center text-gray-500 md:text-base/0.05 dark:text-gray-400">
                      Comprehensive heart care, from diagnosis to treatment.
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
      <section className="py-12 lg:py-24">
        <div className="container px-4 space-y-12">
          <div className="flex flex-col items-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Meet Our Doctors
            </h2>
            <p className="max-w-[700px] text-center text-gray-500 md:text-xl dark:text-gray-400">
              Our team of experienced physicians and specialists are dedicated
              to providing exceptional care and expertise across a wide range of
              medical specialties.
            </p>
          </div>
          <div className="flex justify-center flex-wrap gap-4">
            {data.doctors.map((ele: DoctorDataProps, id: string) => (
              <React.Fragment key={id}>
                <DoctorCard data={ele} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-24">
        <div className="container grid gap-12 md:grid-cols-2">
          <div className="flex items-center space-x-4">
            <img
              alt="Hospital"
              className="aspect-video rounded-lg object-cover overflow-hidden"
              height="275"
              src="/placeholder.svg"
              width="550"
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">
                Contact {data.hospital.hospitalName}'s Hospital
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                If you have any questions or would like to make an appointment,
                please contact us using the information below.
              </p>
            </div>
          </div>
          <div className="grid max-[300px] gap-4">
            <div className="flex items-center space-x-2">
              <MapPinIcon className="w-6 h-6" />
              <span className="text-gray-500 dark:text-gray-400">
                {data.hospital.address}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-6 h-6" />
              <span className="text-gray-500 dark:text-gray-400">
                Call {data.hospital.hospitalContactNumber}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <MailIcon className="w-6 h-6" />
              <span className="text-gray-500 dark:text-gray-400">
                {data.hospital.hospitalEmail}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HospitalDetails;
