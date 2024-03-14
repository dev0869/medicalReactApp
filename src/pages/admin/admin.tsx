import { Routes, Route } from "react-router-dom";
import MainProfile from "./DashBoardPages/mainProfile";
import ProfileSetting from "./DashBoardPages/profileSetting";
import DashLayout from "@/components/layout/DashLayout";
import Trips from "./DashBoardPages/trips";
const Admin = () => {
  return (
    <DashLayout>
      <Routes>
        <Route path="/" element={<MainProfile />}></Route>
        <Route path="setting" element={<ProfileSetting />}></Route>
        <Route path="trips" element={<Trips />}></Route>
        <Route path="profile" element={<MainProfile />}></Route>
      </Routes>
    </DashLayout>
  );
};

export default Admin;
