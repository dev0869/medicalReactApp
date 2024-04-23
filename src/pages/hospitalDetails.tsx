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
      <div className="bg-gray-100 flex justify-between hospitalbg relative py-6 lg:py-12">
        <div className="container px-9 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="font-bold linearText  w-full text-primary text-4xl sm:text-5xl">
                {data.hospital.hospitalName}
              </h1>
              <p className="text-gray-800 bg-[#CCF0F3] w-fit py-1 px-3 rounded-lg font-bold dark:text-gray-400">
                {data.hospital.specialization}
              </p>
              <p className="mx-auto text-[#262C67] font-bold  mt-4 max-w-[700px] md:text-xl dark:text-gray-400">
                {data.hospital.discription}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <HotelIcon color="#262C67" className="w-5 h-5" />
                <span
                  className=" text-[#262C67]  max-w-[700px] font-bold md:text-sm dark:text-gray-400"
                  href="#s"
                >
                  {data.hospital.address}
                </span>
              </div>
              <div className="flex underline items-center space-x-2">
                <PhoneIcon color="#262C67" className="w-5 h-5" />
                <a
                  className=" text-[#262C67]  max-w-[700px] font-bold md:text-sm dark:text-gray-400"
                  href="#"
                >
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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Hospital-de-Bellvitge.jpg/640px-Hospital-de-Bellvitge.jpg"
              width="500"
            />
          </div>
        </div>
      </div>

      <section className="py-12 lg:py-24">
        <div className="container  px-4 space-y-12">
          <video
            controls
            className="w-full h-full"
            src="https://videos.pexels.com/video-files/3197808/3197808-hd_1920_1080_25fps.mp4"
          ></video>
        </div>
      </section>
      <section className="border-t border-b py-12 lg:py-24">
        <div className="container px-4 space-y-12">
          <div className="flex flex-col items-center space-y-2">
            <h2 className="font-bold linearText text-center w-full text-primary text-4xl sm:text-5xl">
              Our Fascilities
            </h2>
            <p className="mx-auto para text-center mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              {data.hospital.hospitalName} offers a comprehensive range of
              medical services to meet the healthcare needs of our community.
              From primary care to specialized treatments, we are here to help
              you stay healthy and well.
            </p>
          </div>
          <div className="grid gap-6 justify-center md:grid-cols-2 lg:grid-cols-3">
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
                    className="flex border-r-[2px]  border-[#581C87]  flex-col items-center space-y-2"
                  >
                    <div className="flex flex-col items-center">
                      <p className=" text-purple-900 text-6xl font-bold">
                        {++fcid}.
                      </p>
                      <h3 className=" text-[#581C87] text-lg font-bold ">{facility.title}</h3>
                    </div>
                    <p className="text-center text-[#262C67] md:text-base/0.05 dark:text-gray-400">
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
            <h2 className="font-bold linearText text-center w-full text-primary text-4xl sm:text-5xl">
              Meet Our Doctors
            </h2>
            <p className="mx-auto para text-center mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
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
          <img
            alt="Hospital"
            className="aspect-video rounded-lg object-cover overflow-hidden"
            height="275"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Hospital-de-Bellvitge.jpg/640px-Hospital-de-Bellvitge.jpg"
            width="550"
          />
          <div className="flex  items-center space-x-4">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">
                Contact Us
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                If you have any questions or would like to make an appointment,
                please contact us using the information below.
              </p>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default HospitalDetails;
