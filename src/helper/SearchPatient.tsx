import React, { useState } from "react";
import useFilterUserHooks from "../hooks/useFilterUserHooks";
import useAdminHooks, { useAdminPostHooks } from "../hooks/useAdminHooks";
import { UserDataProps } from "@/types";

const useSearchPatientHooks = () => {
  const { data, isLoading } = useAdminHooks("getAuth", "auth" || "");
  const [charges, setCharges] = useState("");
  const { mutation } = useAdminPostHooks("/interpreters");
  const {
    addOperation,

    hidebar,

    active,
    Operatable,
    searchUsers,
    setSearchPatient,
    plist,
    searchPatient,
    setIsActive,
  } = useFilterUserHooks();
  const FilterOperation = (filterCase: string) => {
    return data?.filter((ele: { username: string | string[] }) =>
      ele.username.includes((filterCase as string).toLowerCase())
    );
  };

  const datss = plist.map((ele) => ele.id);

  return (
    <div>
      <div>
        <label
          htmlFor="email"
          className="block  mb-2   text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Search Patients
        </label>
        <input
          onBlur={() => hidebar("patient")}
          value={searchPatient}
          onChange={(e) => {
            searchUsers("patient", e.target.value);
          }}
          className="shadow-sm p-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  mb-2  w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="Enter Charges"
        />
        {active.patient && (
          <div
            style={{ scrollbarWidth: "none" }}
            className="shadow-md w-[20%] border-[1px]  rounded-lg   bg-white absolute h-[120px] overflow-y-auto  "
          >
            {(FilterOperation(searchPatient) as UserDataProps[]).map(
              (ele, id) => (
                <div
                  onClick={() => {
                    addOperation("patient", {
                      name: ele.username,
                      id: ele._id,
                    });
                    setSearchPatient("");
                    setIsActive({ ...active, patient: false });
                  }}
                  className="p-2 m-1 transition-all rounded-lg cursor-pointer px-4 py-2 hover:bg-gray-100 text-gray-800 text-sm font-bolder"
                  key={id}
                >
                  {ele.username}
                </div>
              )
            )}
          </div>
        )}
        <Operatable operation={plist} cases="patient" />
      </div>
    </div>
  );
};

export default useSearchPatientHooks;
