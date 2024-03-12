import { Link } from "react-router-dom";
import { AdminRoutes } from "@/routes";
import { Button } from "@/components/ui/button";
import { Routes, Route } from "react-router-dom";
const Admin = () => {
  return (
    <>
      <div className="grid h-screen w-full min-h-screen lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-[60px] items-center border-b px-6">
              <Link className="flex items-center gap-2 font-semibold" to="#">
                {/* <Package2Icon className="h-6 w-6" /> */}
                <span className="">Acme Inc</span>
              </Link>
              <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
                {/* <BellIcon className="h-4 w-4" /> */}
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium">
                {AdminRoutes.map((ele, id) => (
                  <Link
                    key={id}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    to={ele.path}
                  >
                    {ele.icon}
                    {ele.title}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="mt-auto p-4">
              <div>card</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <Link className="lg:hidden" to="#">
              {/* <Package2Icon className="h-6 w-6" /> */}
              <span className="sr-only">Home</span>
            </Link>
            <div className="w-full flex-1">
              <form>
                <div className="relative">
                  {/* <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" /> */}
                  <input
                    className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                    placeholder="Search products..."
                    type="search"
                  />
                </div>
              </form>
            </div>
            {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex items-center">
              <h1 className="font-semibold text-lg md:text-2xl">Users</h1>
              <Button className="ml-auto" size="sm">
                Add user
              </Button>
            </div>
            <div className="border shadow-sm rounded-lg">
              <Routes>
                <Route path="setting" element={<p>set</p>}></Route>
                <Route path="shopping" element={<p>shop</p>}></Route>
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Admin;
