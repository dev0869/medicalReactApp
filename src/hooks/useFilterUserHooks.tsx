import { useState } from "react";

const useFilterUserHooks = () => {
  const [lang, setLang] = useState<string[]>([]);
  const [plist, setPlist] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [active, setIsActive] = useState({
    user: false,
    patient: false,
  });

  const Operatable = ({
    operation,
    cases,
  }: {
    operation: Array<string> | { name: string };
    cases: string;
  }) => (
    <div className="mt-4 flex gap-4">
      {[...new Set(operation)].map((ele, id: number) => (
        <div className="px-2 relative py-1 rounded-full linerBg" key={id}>
          <span
            onClick={() => delLanguage(cases, id)}
            className="cursor-pointer text-white bg-red-500 px-2 py-[1px] translate-y-[-11px] translate-x-3 text-sm rounded-full absolute top-0 right-0"
          >
            x
          </span>
          {ele.name || ele}
        </div>
      ))}
    </div>
  );

  const addOperation = (
    cases: string,
    newone: { name: string; id: string }
  ) => {
    switch (cases) {
      case "user":
        setLang((prev) => [...prev, newone]);
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

      default:
        break;
    }
  };

  return {
    addOperation,
    delLanguage,

    lang,
    inputValue,
    setInputValue,
    active,
    setIsActive,

    Operatable,
    plist,
  };
};

export default useFilterUserHooks;
