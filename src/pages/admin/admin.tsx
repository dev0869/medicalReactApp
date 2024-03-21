import { Routes, Route } from "react-router-dom";
import MainProfile from "./DashBoardPages/mainProfile";
import ProfileSetting from "./DashBoardPages/profileSetting";
import DashLayout from "@/components/layout/DashLayout";
import DataTable from "./DashBoardPages/dataTable";
const Admin = () => {
  return (
    <DashLayout>
      <Routes>
        <Route path="/" element={<MainProfile />}></Route>
        <Route path="setting" element={<ProfileSetting />}></Route>
        <Route path="profile" element={<MainProfile />}></Route>
        <Route path="section/*" element={<DataTable />}></Route>
      </Routes>
    </DashLayout>
  );
};

export default Admin;
