import { Button } from "@/components/ui/button";
import HorizontalLine from "@/components/ui/horizontal-line";
import useAdminHooks from "@/hooks/useAdminHooks";
import useFilterUserHooks from "@/hooks/useFilterUserHooks";
import { UserDataProps } from "@/types";

const AddDoctor = () => {
  const { data, isLoading } = useAdminHooks("getAuth", "auth" || "");
  const {
    addOperation,
    lang,
    setInputValue,
    hidebar,
    inputValue,
    searchUser,
    setSearchUser,
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

  if (isLoading) {
    return "Loading";
  }

  return (
    <>
      <form className="px-8 py-4 space-y-8">
        <div className="w-[80%] flex flex-col rounded-xl shadow-md border-2 mx-auto p-8 justify-center">
          <div>
            <label
              htmlFor="email"
              className="block  mb-2   text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Search User
            </label>
            <input
              onBlur={() => hidebar("user")}
              value={(searchUser as string)}
              onChange={(e) => {
                searchUsers("user", e.target.value);
              }}
              className="shadow-sm p-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  mb-2  w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Enter Charges"
              required
            />
            {active.user && (
              <div
                style={{ scrollbarWidth: "none" }}
                className="shadow-md w-[20%] border-[1px]  rounded-lg   bg-white absolute h-[120px] overflow-y-auto  "
              >
                {(FilterOperation(searchUser) as UserDataProps[]).map(
                  (ele, id) => (
                    <div
                      onClick={() => {
                        setSearchUser(ele.username);
                        setIsActive({...active,user:false});
                      }}
                      className="p-2 m-1 transition-all rounded-lg   cursor-pointer px-4 py-2 hover:bg-gray-100 text-gray-800 text-sm font-bolder"
                      key={id}
                    >
                      {ele.username}
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          <div>
            <label className="block  mb-2   text-sm font-medium text-gray-900 dark:text-gray-300">
              Charges{" "}
            </label>
            <input
              className="shadow-sm p-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  mb-2  w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Enter Charges"
              required
            />
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
              required
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
              required
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
                        addOperation("patient", ele.username);
                        setSearchPatient("");
                        setIsActive({...active,patient:false});
                      }}
                      className="p-2 m-1 transition-all rounded-lg   cursor-pointer px-4 py-2 hover:bg-gray-100 text-gray-800 text-sm font-bolder"
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

        <HorizontalLine />
      </form>
    </>
  );
};

export default AddDoctor;
