import { Button } from "@/components/ui/button";
import useAdminHooks from "@/hooks/useAdminHooks";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hospital = () => {
  const [searchText, setSearchText] = useState("");
  const { data, isFetching } = useAdminHooks("getHospital", "/hospitals");
  const handleHospitalDoctor = () => {};
  if (isFetching) {
    return "loader";
  }
  return (
    <>
      <section className="w-full py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-2 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Find a Hospital
              </h2>
              <p> Enter your location to find the nearest hospitals.</p>
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
          <div className="mx-auto flex my-9  justify-center gap-9">
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
