import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import { About, Contact, Home, NotFound } from "./pages";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <p>hiii</p>
      </Layout>
    </>
  );
};

export default App;
