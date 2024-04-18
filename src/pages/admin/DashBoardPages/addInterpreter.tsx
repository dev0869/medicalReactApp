import { Button } from "@/components/ui/button";
import SelectOperation from "@/helper/SelectOperation";
import useAdminHooks, { useAdminPostHooks } from "@/hooks/useAdminHooks";
import useFilterUserHooks from "@/hooks/useFilterUserHooks";
import { UserDataProps } from "@/types";
import { useState } from "react";
import { toast } from "react-toastify";

const AddInterpreter = () => {
  const [selectedValue, setSelectedValue] = useState<{
    value: string;
    label: string;
  }>();
  const [selectedPatiet, setSelectedPatiet] = useState<
    {
      value: string;
      label: string;
    }[]
  >([]);

  const { data, isLoading } = useAdminHooks("getAuth", "auth" || "");
  const { data: patient } = useAdminHooks("getAuth", "auth" || "");

  const [charges, setCharges] = useState("");
  const { mutation } = useAdminPostHooks("/interpreters");
  const {
    addOperation,
    lang,
    setInputValue,
    inputValue,
    searchUser,
    setSearchUser,
    active,
    Operatable,

    setIsActive,
  } = useFilterUserHooks();
  const FilterOperation = (filterCase: string) => {
    return data?.filter((ele: { username: string | string[] }) =>
      ele.username.includes((filterCase as string).toLowerCase())
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      userId: selectedValue?.value,
      languages: lang,
      charges: +charges,
      patients: selectedPatiet?.map((ele) => ele.value),
    };
    await mutation.mutateAsync(data);
    toast.success("Data SuccessFully Submitted!");
  };

  if (isLoading) {
    return "Loading";
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="px-8 py-4 space-y-8">
        <div className="w-[80%] flex flex-col rounded-xl shadow-md border-2 mx-auto p-8 justify-center">
          <div className="flex gap-4 justify-between">
            <div className="w-full">
              <SelectOperation
                name={"User"}
                data={data}
                setSelectedValue={setSelectedValue}
              />

              {active.user && (
                <div
                  style={{ scrollbarWidth: "none" }}
                  className="shadow-md w-[20%] border-[1px]  rounded-lg   bg-white absolute h-[120px] overflow-y-auto  "
                >
                  {(
                    FilterOperation(searchUser as string) as UserDataProps[]
                  ).map((ele, id) => (
                    <div
                      onClick={() => {
                        setSearchUser({ name: ele.username, id: ele._id });
                        setIsActive({ ...active, user: false });
                      }}
                      className="p-2 m-1 transition-all rounded-lg   cursor-pointer px-4 py-2 hover:bg-gray-100 text-gray-800 text-sm font-bolder"
                      key={id}
                    >
                      {ele.username}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="w-full">
              <label className="block  mb-2   text-sm font-medium text-gray-900 dark:text-gray-300">
                Charges{" "}
              </label>
              <input
                className="shadow-sm p-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  mb-2  w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter Charges"
                value={charges}
                onChange={(e) => setCharges(e.target.value)}
              />
            </div>
          </div>

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
          <SelectOperation
            name={"Patients"}
            data={patient}
            setSelectedValue={setSelectedPatiet}
          />
        </div>
        <button
          type="submit"
          className="bg-green-500  text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Submit
        </button>{" "}
      </form>
    </>
  );
};

export default AddInterpreter;
