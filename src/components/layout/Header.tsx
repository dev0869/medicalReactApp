import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Search from "../ui/search";
import { Menu, Search as SearchIco } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

export function SearchMobileV1() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <SearchIco className="text-gray-800" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-0">
        <Search />
      </DialogContent>
    </Dialog>
  );
}

const Header = () => {
  return (
    <>
      <div className="p-4 items-center sticky top-0 bg-[#FAFBFB] shadow-md w-full  flex justify-between ">
        <Link to={"/"} className="font-bold text-xl text-blue-500">
          Excelus MedAssits
        </Link>
        <nav></nav>
        <div className="md:hidden flex items-center gap-4">
          <ToggleNav />
          <SearchMobileV1 />
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Search />
          <Button>
            <Link to={"/auth/login"}>Login</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export function ToggleNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>hiii</SheetContent>
    </Sheet>
  );
}

export default Header;
