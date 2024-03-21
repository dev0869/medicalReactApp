import DoctorCard, { DoctorDataProps } from "@/components/ui/doctorCard";
import useAdminHooks from "@/hooks/useAdminHooks";
import React, {
  Key,
} from "react";
import { useSearchParams } from "react-router-dom";
const Doctor = () => {
  const [searchParams] = useSearchParams();
  const { data } = useAdminHooks("getDoctors", "doctors");
  const searchText = searchParams.get("q");
  const filterData = data?.filter(
    (ele: { expertise: (string | null | undefined)[] }) =>
      ele.expertise.includes(searchText)
  );

  const DoctorData = filterData?.length > 0 ? filterData : data;

  return (
    <div className="flex flex-wrap justify-center p-8 gap-4">
      {DoctorData?.map((ele: DoctorDataProps, id: Key | null | undefined) => {
        return (
          <React.Fragment key={id}>
            <DoctorCard data={ele} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Doctor;
