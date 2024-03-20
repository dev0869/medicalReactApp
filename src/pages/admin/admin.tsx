import { Routes, Route } from "react-router-dom";
import MainProfile from "./DashBoardPages/mainProfile";
import ProfileSetting from "./DashBoardPages/profileSetting";
import DashLayout from "@/components/layout/DashLayout";
import Trips from "./DashBoardPages/trips";
import InterPretier from "./DashBoardPages/interPretier";
import DoctorList from "./DashBoardPages/doctorList";
import PatientList from "./DashBoardPages/patientList";
const Admin = () => {
  return (
    <DashLayout>
      <Routes>
        <Route path="/" element={<MainProfile />}></Route>
        <Route path="setting" element={<ProfileSetting />}></Route>
        <Route path="trips" element={<Trips />}></Route>
        <Route path="profile" element={<MainProfile />}></Route>
        <Route path="interPretier" element={<InterPretier />}></Route>
        <Route path="doctorList" element={<DoctorList />}></Route>
        <Route path="patient" element={<PatientList />}></Route>
      </Routes>
    </DashLayout>
  );
};

export default Admin;
