import { Button } from "./button";
import { Search as SearchIco } from "lucide-react";

const Search = () => {
  return (
    <form className=" mx-auto w-full ">
      <div className="relative w-full md:w-[300px]">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SearchIco size={20} className="text-gray-800 " />
        </div>
        <input
          type="search"
          className="block  focus:outline-none w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          placeholder="Search Doctors"
          required
        />
        <Button
          type="submit"
          className="text-white absolute end-1 bottom-[3px] bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default Search;
