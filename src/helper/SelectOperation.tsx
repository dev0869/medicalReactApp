// import useAdminHooks from "../hooks/useAdminHooks";

// const SelectOperation = ({
//   hidebar,
//   searchUser,
//   setSearchUser,
//   active,
//   searchUsers,
//   setIsActive,
// }: {
//   hidebar: (arg: string) => void;
//   searchUser: { name: string };
//   setSearchUser: (arg: { name: string; id: string }) => void;
//   active: { user: string };
//   searchUsers: (arg: string, arg1: string) => void;
//   setIsActive: (arg: { user: boolean }) => void;
// }) => {
//   const { data } = useAdminHooks("getAuth", "auth" || "");

//   const FilterOperation = (filterCase: string) => {
//     return data?.filter((ele: { username: string | string[] }) =>
//       ele.username.includes((filterCase as string).toLowerCase())
//     );
//   };
//   return (
//     <div className="w-full">
//       <label
//         htmlFor="email"
//         className="block  mb-2   text-sm font-medium text-gray-900 dark:text-gray-300"
//       >
//         Search User
//       </label>
//       <input
//         onBlur={() => hidebar("user")}
//         value={searchUser.name}
//         onChange={(e) => {
//           searchUsers("user", e.target.value);
//         }}
//         className="shadow-sm p-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  mb-2  w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//         placeholder="Enter User"
//       />
//       {active.user && (
//         <div
//           style={{ scrollbarWidth: "none" }}
//           className="shadow-md w-[20%] border-[1px]  rounded-lg   bg-white absolute h-[120px] overflow-y-auto  "
//         >
//           {FilterOperation(searchUser).map(
//             (ele: { username: string; _id: string }, id: string) => (
//               <div
//                 onClick={() => {
//                   setSearchUser({ name: ele.username, id: ele._id });
//                   setIsActive({ ...active, user: false });
//                 }}
//                 className="p-2 m-1 transition-all rounded-lg   cursor-pointer px-4 py-2 hover:bg-gray-100 text-gray-800 text-sm font-bolder"
//                 key={id}
//               >
//                 {ele.username}
//               </div>
//             )
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SelectOperation;

import { useState } from "react";
import useAdminHooks from "../hooks/useAdminHooks";
import Select from "react-select";

const SelectOperation = () => {
  const { data } = useAdminHooks("getAuth", "auth" || "");
  const [datavalue,setDataValue]=useState('');
  console.log(datavalue);
  const options = data?.map((ele, id) => ({
    value: ele._id,
    label: ele.username,
  }));
  console.log(options);

  return (
    <div className="w-full">
      <Select onChange={(e) => setDataValue(e.value)} options={options} />
    </div>
  );
};

export default SelectOperation;
