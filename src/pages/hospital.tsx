import { Button } from "@/components/ui/button";
import useAdminHooks from "@/hooks/useAdminHooks";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hospital = () => {
  const [searchText, setSearchText] = useState("");
  const { data, isLoading } = useAdminHooks("getHospital", "/hospitals");
  const handleHospitalDoctor = () => {};
  if (isLoading) {
    return "loader";
  }

  return (
    <>
      <div data-aos-duration="1000" data-aos="fade-zoom-in">
        <div
          className="px-8"
          style={{
            background:
              "linear-gradient(204deg, #f9f2ff 0, #d2f4ff 29.5%, #fff 62.5%, #fff 86%, #c4e8ff 100%)",
            borderTop: "1px solid #bdcdff",
            borderBottom: "1px solid #bdcdff",
          }}
        >
          <div className="container px-4 md:py-14 py-8 max-w-screen-lg2 m-auto flex flex-wrap gap-2 items-center">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="mx-auto  relative mb-4 md:mb-0"
            >
              <img
                src="/hospitalsec.png"
                alt=""
                className="relative z-0 w-full"
                style={{ maxHeight: "300px" }}
              />
            </div>
            <div className="md:w-1/2 w-full mt-4">
              <h2
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="2000"
                className="text-xl leading-7 font-semibold mb-4"
              >
                Cashless Everywhere - Experience seamless hospitalization
                anytime, anywhere!
              </h2>
              <p
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="2000"
                className="text-md"
              >
                Now, enjoy the convenience of cashless treatment at any hospital
                of your choice, regardless of whether it is part of the
                insurer’s network or not. Our customers can now access medical
                care even at non-network hospitals.
              </p>
              <button
                data-aos="zoom-in"
                data-aos-delay="800"
                data-aos-duration="1000"
                className="transition delay-150 ease-in px-4 py-2 buttonPrimaryText border secondaryBorderColor rounded hover:text-white hover:primaryBgHover text-base inline-block cursor-pointer outline-none"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-2 text-center">
            <div className="space-y-2">
              <h2
                data-aos-duration="1000"
                data-aos="zoom-in"
                className="text-3xl linearText font-bold tracking-tighter sm:text-4xl"
              >
                Find a Hospital
              </h2>
              <p
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos="fade-up"
                className="para mx-auto"
              >
                {" "}
                Enter your location to find the nearest hospitals.
              </p>
            </div>
            <div className="w-full border-2 md:w-[600px] mx-auto flex items-center justify-between rounded-md bg-light shadow-main ">
              <input
                placeholder="Search Doctors ..."
                type="text"
                className="outline-none  w-full py-2 px-4 h-full rounded-s-md"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                onClick={handleHospitalDoctor}
                className="bg-primary whitespace-nowrap w-[35%] sm:w-[40%] rounded-e-md h-full px-4 py-2 text-light"
              >
                <i className="fa-solid fa-magnifying-glass"></i> Search
              </button>
            </div>
          </div>
          <div className="mx-auto flex my-9 flex-wrap  justify-center gap-9">
            {data.map(
              (
                ele: {
                  _id: string;
                  specialization:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        string | React.JSXElementConstructor<string>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Iterable<React.ReactNode>
                    | null
                    | undefined;
                  hospitalName:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        string | React.JSXElementConstructor<string>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Iterable<React.ReactNode>
                    | null
                    | undefined;
                  address:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        string | React.JSXElementConstructor<string>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Iterable<React.ReactNode>
                    | null
                    | undefined;
                  timing:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        string | React.JSXElementConstructor<string>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Iterable<React.ReactNode>
                    | null
                    | undefined;
                },
                id: string
              ) => {
                return (
                  <React.Fragment key={id}>
                    <div className="flex flex-col gap-1">
                      <div className="text-sm bg-green-100 p-1 rounded-lg w-fit  text-gray-500 dark:text-gray-400">
                        {ele.specialization}
                      </div>
                      <div className="text-lg font-semibold">
                        {ele.hospitalName}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {ele.address}
                      </div>

                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {ele.timing} Available
                      </div>
                    </div>
                    <Button
                      className="h-10 justify-self-start"
                      variant="outline"
                    >
                      <Link to={`/hospitals/${ele._id}`}>Get Details</Link>
                    </Button>
                  </React.Fragment>
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hospital;
