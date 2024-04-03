import { ReactElement } from "react";

interface RoutesPropschild {
  title: string;
  path: string;
  icon: ReactElement;
}

export interface Config {
  headers: {
    Authorization: string | null;
  };
}
export interface RoutesProps {
  title: string;
  path: string;
  icon: ReactElement;
  children?: RoutesPropschild[];
}

export interface UserDataProps {
  _id: string;
  fullname: string;
  username: string;
}

export interface HospitalProps {
  userId: string | undefined;
  hospitalName: string;
  hospitalContactNumber: number;
  hospitalEmail: string;
  images: string[];
  address: string;
  discription: string;
  videoDiscription?: string;
  timing: string;
  specialization: string;
  facilities: Facilityprops[];
  appointments: string[];
}

export interface Facilityprops {
  title: string;
  description?: string;
  price: number;
}
