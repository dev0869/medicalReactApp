import { ReactElement } from "react";

interface RoutesPropschild {
  title: string;
  path: string;
  icon: ReactElement;
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
  username:string
}
