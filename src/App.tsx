import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import { About, Contact, Home, NotFound } from "./pages";
import Login from "./components/auth/login";
import useAuthVerifyHooks from "./hooks/useAuthHooks";
import Admin from "./pages/admin/admin";
import "./i18n";
const App = () => {
  useAuthVerifyHooks();

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/auth/login" element={<Login />}></Route>
          <Route path="/auth/register" element={<About />}></Route>
          <Route path="/:role/dashboard/*" element={<Admin />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </>
  );
};

export default App;
