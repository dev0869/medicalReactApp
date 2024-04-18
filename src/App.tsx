import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Home,
  NotFound,
  Doctor,
  DoctorDetails,
  Hospital,
  HospitalDetails,
} from "./pages";
import Login from "./components/auth/login";
import useAuthVerifyHooks from "./hooks/useAuthHooks";
import Admin from "./pages/admin/admin";
import "./i18n";
import Register from "./components/auth/register";
const App = () => {
  const { error, data } = useAuthVerifyHooks();
  console.log(error, data);

  return (
  
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/doctors/*" element={<Doctor />}></Route>
          <Route path="/doctors/:id" element={<DoctorDetails />}></Route>
          <Route path="/hospitals" element={<Hospital />}></Route>
          <Route path="/hospitals/:id" element={<HospitalDetails />}></Route>
          <Route path="/auth/login" element={<Login />}></Route>
          <Route
            path="/auth/register/:subscriptionType"
            element={<Register />}
          ></Route>
          <Route path="/:role/dashboard/*" element={<Admin />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Layout>
  );
};

export default App;
