import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-theme-quartz.css";
import useAdminHooks from "@/hooks/useAdminHooks";
import { useSearchParams } from "react-router-dom";
import { columnConfig } from "@/lib/utils";

const DataTable = () => {
  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [10, 350, 500, 1000];
  const [section] = useSearchParams();
  const route = section.get("route") || "";
  const key = section.get("key");
  const url = section.get("url");
  const [columns, setColumns] = useState<ColDef[]>([]);
  const { data, isLoading } = useAdminHooks(key, url || "");

  useEffect(() => {
    setColumns(columnConfig[route] || []);
  }, [route]);

  if (isLoading) {
    return "loading";
  }

  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      <AgGridReact
        pagination={pagination}
        paginationPageSize={paginationPageSize}
        paginationPageSizeSelector={paginationPageSizeSelector}
        rowData={data}
        columnDefs={columns}
      />
    </div>
  );
};

export default DataTable;
