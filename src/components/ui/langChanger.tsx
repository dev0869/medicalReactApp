import { LanguagesIcon, GlobeIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Button } from "./button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const LangChanger = () => {
  const { i18n } = useTranslation();
  const locals = ["en", "es-ES", "frc"];
  const [curLang, setCurLang] = useState("Language");
  const languageHandler = (ele: string) => {
    setCurLang(ele);
    i18n.changeLanguage(ele);
  };

  return (
    <div className="flex items-center space-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" variant="outline">
            <LanguagesIcon className="w-5 h-5" />
            {curLang}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-1 w-36">
          <DropdownMenuGroup>
            {locals.map((ele, id) => (
              <DropdownMenuItem key={id} onClick={() => languageHandler(ele)}>
                <GlobeIcon className="w-4 h-4 mr-1.5" />
                {ele}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LangChanger;
