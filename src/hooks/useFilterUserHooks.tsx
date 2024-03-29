import { useState } from "react";

const useFilterUserHooks = () => {
  const [lang, setLang] = useState<string[]>([]);
  const [plist, setPlist] = useState<string[]>([]);

  
  const [inputValue, setInputValue] = useState("");
  const [searchUser, setSearchUser] = useState({});
  const [searchPatient, setSearchPatient] = useState("");
  const [active, setIsActive] = useState({
    user: false,
    patient: false,
  });


  const searchUsers = (cases: string, newone: string) => {
    switch (cases) {
      case "user":
        setSearchUser(newone);
        setIsActive({ ...active, user: true });
        break;
      case "patient":
        setSearchPatient(newone);
        setIsActive({ ...active, patient: true });
        break;
      default:
        break;
    }
  };

  const hidebar = (cases: string) => {
    switch (cases) {
      case "user":
        if ((searchUser as string).trim() === "") {
          setIsActive({ ...active, user: false });
        }
        break;
      case "patient":
        if ((searchPatient as string).trim() === "") {
          setIsActive({ ...active, patient: false });
        }
        break;
      default:
        break;
    }
  };

  const Operatable = ({
    operation,
    cases,
  }: {
    operation: string[];
    cases: string;
  }) => (
    <div className="mt-4 flex gap-4">
      {[...new Set(operation)].map((ele: string, id: number) => (
        <div className="px-2 relative py-1 rounded-full linerBg" key={id}>
          <span
            onClick={() => delLanguage(cases, id)}
            className="cursor-pointer text-white bg-red-500 px-2 py-[1px] translate-y-[-11px] translate-x-3 text-sm rounded-full absolute top-0 right-0"
          >
            x
          </span>
          {ele}
        </div>
      ))}
    </div>
  );

  const addOperation = (cases: string, newone: string) => {
    switch (cases) {
      case "patient":
        setPlist((prev: string[]) => [...prev, newone]);
        setIsActive({ ...active, patient: true });
        break;
      case "user":
        setLang((prev: string[]) => [...prev, newone]);
        setInputValue("");
        break;
      default:
        console.log("Invalid case");
        break;
    }
  };

  const delLanguage = (cases: string, id: number) => {
    switch (cases) {
      case "user": {
        const copyLang = [...lang];
        copyLang.splice(id, 1);
        setLang(copyLang);
        break;
      }
      case "patient": {
        const copyPlist = [...plist];
        copyPlist.splice(id, 1);
        setPlist(copyPlist);
        break;
      }
      default:
        break;
    }
  };

  return {
    addOperation,
    delLanguage,
    searchUsers,
    lang,
    inputValue,
    setInputValue,
    active,
    setIsActive,
    searchUser,
    setSearchUser,
    hidebar,
    searchPatient,
    setSearchPatient,
    Operatable,
    plist,
    // patientActive,
    // setPatientActive,
  };
};

export default useFilterUserHooks;
