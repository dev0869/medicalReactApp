import { Link } from "react-router-dom";
import { UserRoutes, AdminRoutes } from "@/routes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { ReactElement, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import useAuthVerifyHooks from "@/hooks/useAuthHooks";
import { RoutesProps } from "@/types";
import { ToggleLeft, ToggleRight } from "lucide-react";
const DashLayout = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(true);
  const { data } = useAuthVerifyHooks();
  const role = data?.role;

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
      {visible && (
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
                          {ele.children.map(
                            (child: {
                              path: string;
                              icon: ReactElement;
                              title: string;
                            }) => (
                              <Link
                                key={id}
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                to={child.path}
                              >
                                {child.icon}
                                {child.title}
                              </Link>
                            )
                          )}
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
      )}
      <div className="flex flex-[8] flex-col overflow-auto">
        <nav className="bg-[#FAFBFB] flex justify-between border-[1px] rounded-lg my-4 mx-4 p-4 shadow-sm">
          <div className="cursor-pointer" onClick={() => setVisible(!visible)}>
            {visible ? (
              <ToggleLeft
                color="#4A337F"
                size={30}
                strokeWidth={1.5}
                className=""
              />
            ) : (
              <ToggleRight
                color="#4A337F"
                size={30}
                strokeWidth={1.5}
                className=""
              />
            )}
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Billing
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Keyboard shortcuts
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      Invite users
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Email</DropdownMenuItem>
                        <DropdownMenuItem>Message</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>More...</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem>
                    New Team
                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
            
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
        <main className="flex  flex-col gap-4 p-4 md:gap-8 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashLayout;
