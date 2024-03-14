import { SettingsIcon, ShoppingCartIcon, CircleUser,CarFront ,BriefcaseMedical ,Accessibility  } from "lucide-react";

export const Routes = [
  {
    title: "Contact Us",
    path: "contact",
  },
  {
    title: "About Us",
    path: "about",
  },

  {
    title: "Page Not Found",
    path: "**",
  },
];

export const UserRoutes = [
  {
    title: "Shopping",
    path: "shopping",
    icon: <ShoppingCartIcon />,
  },
  {
    title: "Shopping",
    path: "shopping",
    icon: <ShoppingCartIcon />,
  },
  {
    title: "Trips",
    path: "trips",
    icon: <CarFront  />,
  },
  {
    title: "Profile",
    path: "profile",
    icon: <CircleUser />,
  },
  {
    title: "Profile Settings",
    path: "setting",
    icon: <SettingsIcon />,
  },
];

export const AdminRoutes = [
  {
    title: "Patient",
    path: "patient",
    icon: <Accessibility  />,
  },
  {
    title: "Doctor",
    path: "doctprList",
    icon: <BriefcaseMedical  />,
  },
  {
    title: "Trips",
    path: "trips",
    icon: <CarFront  />,
  },
  {
    title: "Profile",
    path: "profile",
    icon: <CircleUser />,
  },
  {
    title: "Profile Settings",
    path: "setting",
    icon: <SettingsIcon />,
  },
];