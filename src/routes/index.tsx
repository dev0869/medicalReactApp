import { RoutesProps } from "@/types";
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

export const AdminRoutes:RoutesProps[] = [
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
    path: "",
    icon: <BriefcaseMedical />,
    children: [
      {
        title: "Get DoctorList",
        path: "section?route=doctor&key=getDoctors&url=doctors",
        icon: <BriefcaseMedical />,
      },
      {
        title: "Add Doctor",
        path: "add doctor",
        icon: <BriefcaseMedical />,
      },
    ],
  },
  {
    title: "Interpreter",
    path: "",
    icon: <BookType />,
    children: [
      {
        title: "Get InterpreterList",
        path: "section?route=interpreters&key=getInterpreter&url=interpreters",
        icon: <BriefcaseMedical />,
      },
      {
        title: "Add Interpreter",
        path: "add interpreter",
        icon: <BriefcaseMedical />,
      },
    ],
  },
  {
    title: "Hospitals",
    path: "",
    icon: <Building2 />,
    children: [
      {
        title: "Get HospitalList",
        path: "section?route=hospital&key=getHospital&url=hospitals",
        icon: <Building2 />,
      },
      {
        title: "Add Hospital",
        path: "add hospital",
        icon: <Building2 />,
      },
    ],
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
