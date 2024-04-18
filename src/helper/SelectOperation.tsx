/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from "react-select";
interface SelectOperationProps {
  name: string;
  data: Record<string, string>[];
  setSelectedValue: any;
}
const SelectOperation = ({
  name,
  data,
  setSelectedValue,
}: SelectOperationProps) => {
  const options = data?.map((ele) => ({
    value: ele._id,
    label: ele.fullname || ele.username || ele.hospitalName,
  }));
  const handleValue = (data: any) => {
    setSelectedValue(data);
  };
  if (name === "Patients") {
    return (
      <>
        <label className="block  mb-2   text-sm font-medium text-gray-900 dark:text-gray-300">
          {name} Name
        </label>
        <Select isMulti onChange={handleValue} options={options} />
      </>
    );
  }

  return (
    <div className="w-full">
      <label className="block  mb-2   text-sm font-medium text-gray-900 dark:text-gray-300">
        {name} Name
      </label>

      <Select onChange={handleValue} options={options} />
    </div>
  );
};

export default SelectOperation;
