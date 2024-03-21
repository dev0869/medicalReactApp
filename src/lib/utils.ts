import { ColDef } from "ag-grid-community";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const columnConfig: Record<string, ColDef[]> = {
  patient: [
    { headerName: "Username", valueGetter: (p) => p.data.fullname },
    { field: "fullname", flex: 3 },
    { field: "mobile", flex: 3 },
    { field: "email", flex: 4 },
    { field: "illness" },
  ],
  doctor: [
    { field: "fullname", flex: 3 },
    { field: "mobile", flex: 3 },
    { field: "email", flex: 4 },
    { field: "expertise" },
    { field: "charges" },
    { field: "education" },
  ],
  interpreters: [
    { field: "fullname", flex: 3 },
    { field: "mobile", flex: 3 },
    { field: "email", flex: 4 },
    { field: "addresses" },
    { field: "languages" },
  ],
  hospital: [
    { field: "hospitalName", flex: 3 },
    { field: "hospitalContactNumber", flex: 6 },
    { field: "hospitalEmail", flex: 6 },
    { field: "address" },
    { field: "specialization" },
    { field: "timing", flex: 3 },
  ],
  users: [
    { field: "fullname", flex: 3 },
    { field: "mobile", flex: 6 },
    { field: "email", flex: 6 },
    { field: "role", filter: true, floatingFilter: true },
  ],
};

