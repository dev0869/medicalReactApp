import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-theme-quartz.css";
import useAdminHooks from "@/hooks/useAdminHooks";
const Trips = () => {
  const { data, isFetching } = useAdminHooks("getDoctors", "doctors");
  
  console.log(data);
  const DoctorData = data?.map(
    (ele: {
      fullname: string;
      mobile: string;
      email: string;
      expertise: string;
      charges: string;
    }) => {
      return {
        fullname: ele.fullname,
        mobile: ele.mobile,
        email: ele.email,
        expertise: ele.expertise,
        charges: "Rs" + " " + ele.charges,
      };
    }
  );
  const [colDefs] = useState<ColDef[]>([
    { field: "fullname", editable: true },
    { field: "mobile" },
    { field: "email" },
    { field: "expertise" },
    { field: "charges" },
  ]);

  if (isFetching) {
    return "loaing";
  }
  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      <AgGridReact rowData={DoctorData} columnDefs={colDefs} />
    </div>
  );
};

export default Trips;
