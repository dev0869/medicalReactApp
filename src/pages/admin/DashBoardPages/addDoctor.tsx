

import { Button } from "@/components/ui/button";
import useAdminHooks from "@/hooks/useAdminHooks";
import useFilterUserHooks from "@/hooks/useFilterUserHooks";
import { UserDataProps } from "@/types";
const AddDoctor = () => {
  const { data, isLoading } = useAdminHooks("getAuth", "auth" || "");

  const {
    addLanguage,
    delLanguage,
    lang,
    setInputValue,
    hidebar,
    inputValue,
    searchUser,
    setSearchUser,
    active,
    searchUsers,
    setIsActive,
  } = useFilterUserHooks();

  const FilterUser = data?.filter((ele: { username: string | string[] }) =>
    ele.username.includes(searchUser.toLowerCase())
  );
  if (isLoading) {
    return "Loading";
  }
  return (
    <>
      <form className="px-8 py-4 space-y-8">
        <div
          id="firstBlock  mb-2 "
          className="w-[80%] flex flex-col rounded-xl shadow-md border-2 mx-auto p-8 justify-center"
        >
          <div>
            <label
              htmlFor="email"
              className="block  mb-2   text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Search User
            </label>
            <input
              onBlur={hidebar}
              value={searchUser}
              onChange={(e) => {
                searchUsers(e.target.value);
              }}
              className="shadow-sm p-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  mb-2  w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Enter Charges"
              required
            />
            {active === true && (
              <div
                style={{ scrollbarWidth: "none" }}
                className="shadow-md w-[20%] border-[1px]  rounded-lg   bg-white absolute h-[120px] overflow-y-auto  "
              >
                {(FilterUser as UserDataProps[]).map((ele, id) => (
                  <div
                    onClick={() => {
                      setSearchUser(ele.username);
                      setIsActive(false);
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
              <Button type="button" onClick={() => addLanguage(inputValue)}>
                ADD LANGUAGE
              </Button>
            )}
            <div className="mt-4 flex gap-4">
              {lang.map((ele, id) => (
                <div
                  className="px-2 relative py-1 rounded-full linerBg"
                  key={id}
                >
                  <span
                    onClick={() => delLanguage(id)}
                    className=" cursor-pointer text-white bg-red-500 px-2 py-[1px] translate-y-[-11px] translate-x-3  text-sm  rounded-full absolute top-0 right-0"
                  >
                    x
                  </span>
                  {ele}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="line-with-circles bg-red-500">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>

     
      </form>
    </>
  );
};

export default AddDoctor;
