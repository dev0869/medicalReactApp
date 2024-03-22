import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const islogin = location.pathname.includes("login");
  const isDashBoard = location.pathname.includes("dashboard");

  if (islogin || isDashBoard) {
    return <>{children}</>;
  }
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
