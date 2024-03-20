import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-theme-quartz.css";
import useAdminHooks from "@/hooks/useAdminHooks";
const PatientList = () => {
  const { data, isFetching } = useAdminHooks("getPatients", "patients");
  console.log(data);
  const [colDefs] = useState<ColDef[]>([
    { field: "fullname", editable: true, flex: 3 },
    { field: "mobile", flex: 3 },
    { field: "email", flex: 4 },
    { field: "illness" },
  ]);

  if (isFetching) {
    return "loaing";
  }
  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      <AgGridReact rowData={data} columnDefs={colDefs} />
    </div>
  );
};

export default PatientList;
