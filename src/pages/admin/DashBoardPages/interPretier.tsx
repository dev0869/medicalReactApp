import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-theme-quartz.css";
import useAdminHooks from "@/hooks/useAdminHooks";
const InterPretier = () => {
  const { data } = useAdminHooks("getInterPretier", "interpreters");
  console.log(data);
  const InterPreterData = data?.map(
    (ele: {
      userId: { fullname: string; mobile: string; email: string };
      languages: string[];
      charges: string;
    }) => {
      return {
        fullname: ele.userId.fullname,
        mobile: ele.userId.mobile,
        email: ele.userId.email,
        languages: ele.languages,
        charges: "Rs" + " " + ele.charges,
      };
    }
  );

  const [colDefs] = useState<ColDef[]>([
    { field: "fullname", editable: true },
    { field: "mobile" },
    { field: "email" },
    { field: "languages" },
    { field: "charges" },
  ]);
  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      <AgGridReact rowData={InterPreterData} columnDefs={colDefs} />
    </div>
  );
};

export default InterPretier;
