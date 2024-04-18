import { Routes, Route } from "react-router-dom";
import MainProfile from "./DashBoardPages/mainProfile";
import ProfileSetting from "./DashBoardPages/profileSetting";
import DashLayout from "@/components/layout/DashLayout";
import DataTable from "./DashBoardPages/dataTable";
import AddHospital from "./DashBoardPages/addHospital";
import AddInterpreter from "./DashBoardPages/addInterpreter";
import AddDoctors from "./DashBoardPages/addDoctors";
import Appointments from "./UserDashBoardPages/appointments";
import Reports from "./UserDashBoardPages/reports";
import Trips from "./UserDashBoardPages/trips";
const Admin = () => {
  return (
    <DashLayout>
      <Routes>
        <Route path="/" element={<ProfileSetting />}></Route>
        <Route path="setting" element={<ProfileSetting />}></Route>
        <Route path="profile" element={<MainProfile />}></Route>
        <Route path="section/*" element={<DataTable />}></Route>
        <Route path="/add interpreter" element={<AddInterpreter />}></Route>
        <Route path="/add hospital" element={<AddHospital />}></Route>
        <Route path="/add doctor" element={<AddDoctors />}></Route>
        {/* User Routes Begins */}
        <Route path="PersonalDetails" element={<ProfileSetting />}></Route>
        <Route path="appointments" element={<Appointments />}></Route>
        <Route path="reports" element={<Reports />}></Route>
        <Route path="trips" element={<Trips />}></Route>
      </Routes>
    </DashLayout>
  );
};

export default Admin;
