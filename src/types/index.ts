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

export interface DoctorProps{

    userId: string | undefined;
    expertise: string;
    charges: number;
    hospitalId?: string | undefined;
    videoDiscription?: string;
    language: string[];
    experince: number;
    education: string;
    shortDiscription: string;
    appointmentTiming: {
      from: Date;
      to: Date;
      breakTime: Date;
      breakDuration: Date;
    };
    certifications: {
      name: string;
      img: string;
      date: Date;
    }[];
    patients:string[];
    appointments: string[];
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


export interface AppointementProps{
  appointmentTime: string;
  appointmentDate: string;
  patientId:string;
  doctorId:string;
  hospitalId:string;
  time:string;
}
export interface TripProps{
  feedback: string;
  status: string;
  departureDate:Date;
  arrivalDate:Date;
  arrival:string;
  userId:string;
  interpreter:string
}