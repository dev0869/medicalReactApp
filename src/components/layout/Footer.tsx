import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div id="footerView" className="background">
        <div className="footer container-full">
          <div className="container wrap">
            <div className="w-full mt-[10%] p-[30px] text-light">
              <div className="container mx-auto p-3">
                <div className="flex justify-between my-4 flex-wrap">
                  <div className="flex flex-col w-full sm:w-[45%] md:w-[23%] gap-2">
                    <img src="/logo.png" width={100} alt="logo" />
                    <div className="flex items-center space-x-4">
                      <a
                        href="#"
                        className="rounded-full border w-8 h-8 flex items-center justify-center"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                      <a
                        href="#"
                        className="rounded-full border w-8 h-8 flex items-center justify-center"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a
                        href="#"
                        className="rounded-full border w-8 h-8 flex items-center justify-center"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col w-full sm:w-[45%] md:w-[23%] gap-1">
                    <Link className="footer-link" to="/about">
                      {" "}
                      About Us{" "}
                    </Link>
                    <Link className="footer-link" to="/contact">
                      {" "}
                      Contact Us{" "}
                    </Link>
                    <Link className="footer-link" to="/careers">
                      {" "}
                      Careers{" "}
                    </Link>
                  </div>
                  <div className="flex flex-col w-full sm:w-[45%] md:w-[23%] gap-1">
                    <Link className="footer-link" to="/services">
                      {" "}
                      Services{" "}
                    </Link>
                    <Link className="footer-link" to="/about">
                      {" "}
                      FAQ{" "}
                    </Link>
                  </div>
                  <div className="flex flex-col w-full sm:w-[45%] md:w-[23%] gap-1">
                    <Link className="footer-link" to="/legal/terms&condition">
                      {" "}
                      Terms & Conditions{" "}
                    </Link>
                    <Link className="footer-link" to="/legal/privacy-policy">
                      {" "}
                      Privacy Policy{" "}
                    </Link>
                    <Link className="footer-link" to="/ase">
                      {" "}
                      Accessibility{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="text-sm py-2 border-t-[1px] text-center">
                <p>© 2023 Excelus MedAssits. All rights reserved.</p>
                <p>Design And Developed By Deepnap Softech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
