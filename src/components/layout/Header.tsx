import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Search from "../ui/search";
import { Menu, Search as SearchIco } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import UserBadge from "../ui/userBadge";
import { accessToken } from "@/apis";
import LangChanger from "../ui/langChanger";
import { Routes } from "@/routes";
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
      <div
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-duration="1000"
        className="px-4 z-10 items-center sticky top-0 ' bg-white shadow-md w-full  flex justify-between "
      >
        <Link to={"/"}>
          <img src="/logo.png" width={100} alt="logo" />
        </Link>
        <nav className=" flex gap-4 text-lg">
          {Routes.map((ele, id) => {
            return (
              <Link
                className="font-[500] para mb-[-30px] text-md"
                data-aos="fade-down"
                data-aos-delay={id * 400}
                data-aos-duration="1000"
                key={id}
                to={ele.path}
              >
                {ele.title}
              </Link>
            );
          })}
        </nav>
        <div className="md:hidden flex items-center gap-4">
          <ToggleNav />
          <SearchMobileV1 />
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Search />
          <LangChanger />
          {accessToken ? (
            <UserBadge />
          ) : (
            <Button>
              <Link to={"/auth/login"}>Login</Link>
            </Button>
          )}
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
