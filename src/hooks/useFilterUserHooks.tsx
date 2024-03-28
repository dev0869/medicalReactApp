import { useState } from "react";

const useFilterUserHooks = () => {
  const [lang, setLang] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [searchUser, setSearchUser] = useState("");
  const [active, setIsActive] = useState(false);

  const searchUsers = (newone: string) => {
    setSearchUser(newone), setIsActive(true);
  };
  const hidebar = () => {
    if (searchUser.trim() === "") {
        setIsActive(false);
      }
  };
  const showBar = () => {
    if (searchUser.trim() === "") {
        setIsActive(false);
      }
  };
  const addLanguage = (newone: string) => {
    setLang((prev: string[]) => [...prev, newone]);
    setInputValue("");
  };
  const delLanguage = (id: number) => {
    const copylang = [...lang];
    copylang.splice(id, 1);
    setLang(copylang);
  };

  return {
    addLanguage,
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
    showBar
  };
};

export default useFilterUserHooks;
