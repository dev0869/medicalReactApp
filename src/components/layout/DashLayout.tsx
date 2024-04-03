import { Link } from "react-router-dom";
import { UserRoutes, AdminRoutes } from "@/routes";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RoutesProps } from "@/routes";
import useAuthVerifyHooks from "@/hooks/useAuthHooks";
const DashLayout = ({ children }: { children: React.ReactNode }) => {
  const { data } = useAuthVerifyHooks();
  const role = data?.role;
  console.log(role);
  let routesToRender: RoutesProps[];
  switch (role) {
    case "admin":
      routesToRender = AdminRoutes;
      break;
    default:
      routesToRender = UserRoutes;
      break;
  }

  return (
    <div className="flex   relative w-full  lg:grid-cols-[280px_1fr]">
      <div className="border-r flex-[2]  rounded-lg sticky top-0 h-screen bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex items-center border-b px-6">
            <Link to={"/"} className="flex items-center gap-2 font-semibold">
              <img src="/logo.png" width={80} alt="" />
              <span>Welcome to Dashboard</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              {routesToRender.map((ele, id) =>
                ele.children ? (
                  <Accordion key={id} type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <div
                          key={id}
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        >
                          {ele.icon}
                          {ele.title}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        {ele.children.map((child, id) => (
                          <Link
                            key={id}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            to={child.path}
                          >
                            {child.icon}
                            {child.title}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ) : (
                  <Link
                    key={id}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    to={ele.path}
                  >
                    {ele.icon}
                    {ele.title}
                  </Link>
                )
              )}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-[8] flex-col overflow-auto">
        <main className="flex  flex-col gap-4 p-4 md:gap-8 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashLayout;
