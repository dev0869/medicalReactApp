import {
  SettingsIcon,
  ShoppingCartIcon,
  CircleUser,
  CarFront,
  BriefcaseMedical,
  Accessibility,
  Users,
  BookType,
  Building2,
} from "lucide-react";

export const Routes = [
  {
    title: "Find Doctors",
    path: "doctors",
  },
  {
    title: "Find Hospitals",
    path: "hospitals",
  },
  {
    title: "About Us",
    path: "about",
  },
  {
    title: "Contact Us",
    path: "contact",
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
    icon: <CarFront />,
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
    title: "All Users",
    path: "section?route=users&key=getAuth&url=auth",
    icon: <Users />,
  },
  {
    title: "Patient",
    path: "section?route=patient&key=getPatients&url=patients",
    icon: <Accessibility />,
  },
  {
    title: "Doctor",
    path: "section?route=doctor&key=getDoctors&url=doctors",
    icon: <BriefcaseMedical />,
  },
  {
    title: "Interpreter",
    path: "section?route=interpreters&key=getInterpreter&url=interpreters",
    icon: <BookType />,
  },
  {
    title: "Hospitals",
    path: "section?route=hospital&key=getHospital&url=hospitals",
    icon: <Building2 />,
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
