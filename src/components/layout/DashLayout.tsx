import { Link } from "react-router-dom";
import { UserRoutes, AdminRoutes } from "@/routes";
import React from "react";
import useAuthVerifyHooks from "@/hooks/useAuthHooks";
const DashLayout = ({ children }: { children: React.ReactNode }) => {
  const { data } = useAuthVerifyHooks();
  const role = data?.role;
  let routesToRender;
  switch (role) {
    case "admin":
      routesToRender = AdminRoutes;
      break;
    default:
      routesToRender = UserRoutes;
      break;
  }

  return (
    <div className="grid h-screen w-full min-h-screen lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" to="#">
              <span className="">Acme Inc</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              {routesToRender.map((ele, id) => (
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
        </div>
      </div>
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashLayout;
