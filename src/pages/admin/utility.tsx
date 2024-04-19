import { useAdminDeleteHooks } from "@/hooks/useAdminHooks";
import { ColDef } from "ag-grid-community";
import { Pencil, Trash } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

const CustomButtonComponent = (props) => {

  const [params] = useSearchParams();
  const key = params.get("key")||null;
  const Url = params.get("url");
  const {data}=props
  const passingData={
    Route:`${Url}/${data._id}`,
    refetch:key
  }
  const { mutation } = useAdminDeleteHooks(passingData);

  if (mutation.isSuccess) {
    return toast.success("Deleted Successfull!")
  }
  if (mutation.isError) {
    return toast.error("Operation Failed!")
  }
  return (
    <div className="flex my-3 gap-4">
      <Trash
        className="cursor-pointer"
        color="red"
        size={18}
        onClick={() => mutation.mutate(data._id)}
      />
      <Pencil className="cursor-pointer" size={18} color="green" />
    </div>
  );
};

export const columnConfig: Record<string, ColDef[]> = {
  patient: [
    { headerName: "Username", valueGetter: (p) => p.data.fullname },
    { field: "fullname", flex: 3 },
    { field: "mobile", flex: 3 },
    { field: "email", flex: 4 },
    { field: "illness" },
    { field: "Actions", cellRenderer: CustomButtonComponent },

  ],
  doctor: [
    { field: "fullname", flex: 3 },
    { field: "mobile", flex: 3 },
    { field: "email", flex: 4 },
    { field: "expertise" },
    { field: "charges" },
    { field: "education" },
    { field: "Actions", cellRenderer: CustomButtonComponent },
  ],
  interpreters: [
    { field: "fullname", flex: 3 },
    { field: "mobile", flex: 3 },
    { field: "email", flex: 4 },
    { field: "addresses" },
    { field: "languages" },
    { field: "Actions", cellRenderer: CustomButtonComponent },

  ],
  hospital: [
    { field: "hospitalName", flex: 3 },
    { field: "hospitalContactNumber", flex: 6 },
    { field: "hospitalEmail", flex: 6 },
    { field: "address" },
    { field: "specialization" },
    { field: "timing", flex: 3 },
    { field: "Actions", cellRenderer: CustomButtonComponent },

  ],
  users: [
    { field: "fullname", flex: 3 },
    { field: "mobile", flex: 6 },
    { field: "email", flex: 6 },
    { field: "role", filter: true, floatingFilter: true },
    { field: "Actions", cellRenderer: CustomButtonComponent },

  ],
};
