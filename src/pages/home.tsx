import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckIcon, StarIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Hero from "@/components/ui/hero";
const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const plans = [
    {
      name: "Basic",
      icon: "fa-bolt",
      price: 100,
      features: ["Appointments", "Medical Records", "Billing", "Telemedicine"],
      link: "auth/register/basic",
    },
    {
      name: "Standard",
      icon: "fa-heart",
      price: 500,
      features: ["Appointments", "Medical Records", "Billing", "Telemedicine"],
      link: "auth/register/standard",
    },
    {
      name: "Premium",
      icon: "fa-star",
      price: 1000,
      features: ["Appointments", "Medical Records", "Billing", "Telemedicine"],
      link: "auth/register/premium",
    },
  ];

  const [searchText, setSearchText] = useState("");
  const handleSearchDoctor = () => {
    if (searchText.trim() !== "") {
      navigate(`/doctors/search?q=${searchText.toLowerCase()}`);
    }
  };

  return (
    <>
      <Hero />
      <section className="container wave mx-auto mt-8 p-3">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div data-aos="fade-zoom-in" data-aos-delay="300" className="badge">
            Excelus MedAssits
          </div>
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            className="text-3xl  linearText font-bold tracking-tighter text-seconadry sm:text-4xl md:text-5xl/none"
          >
            {t("home.header")}
          </div>
          <p
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos="fade-up"
            className="para"
          >
            {t("home.para")}
          </p>
        </div>
      </section>

      <div className="search">
        <div className="container mx-auto h-full flex items-center">
          <div className="flex flex-wrap gap-2 p-3 md:px-20 my-20">
            <h2 className="w-full text-gray-200">
              Search From Available Doctors
            </h2>
            <p className="text-gray-200 md:text-xl mb-4">
              Compassionate care from experienced professionals. We're committed
              to your well-being.
            </p>
            <div className="w-full md:w-[600px] flex justify-between rounded-md bg-light shadow-main">
              <input
                placeholder="Search Doctors ..."
                type="text"
                className="outline-none w-full py-2 px-4 h-full rounded-s-md"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                onClick={handleSearchDoctor}
                className="bg-primary whitespace-nowrap w-[35%] sm:w-[40%] rounded-e-md h-full px-4 text-light"
              >
                <i className="fa-solid fa-magnifying-glass"></i> Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container  mx-auto p-3 flex items-center justify-center flex-col">
        <div>
          <h1
            data-aos-duration="1000"
            data-aos="fade-up"
            className="font-bold linearText text-center w-full text-primary text-4xl sm:text-5xl"
          >
            {t("plan.0.header")}
          </h1>
          <p
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos="fade-up"
            className="mx-auto para text-center mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
          >
            {t("plan.0.para")}
          </p>
        </div>

        <div className="flex wave flex-wrap gap-6 w-full justify-between mb-4">
          {plans.map((plan, index) => (
            <div
              data-aos-delay={index * 200}
              data-aos-duration="1000"
              data-aos="fade-up"
              key={index}
              className="flex flex-col rounded-xl cursor-pointer border overflow-hidden shadow transition-all duration-150 hover:shadow-xl p-3 w-full md:w-[47%] lg:w-[30%]"
            >
              <div className="flex flex-col items-center">
                <StarIcon className="text-gray-500 mb-4 h-12 w-12" />
                <h2 className="text-2xl font-semibold mb-3">Premium</h2>
                <p className="text-gray-500 mb-6">Most popular features</p>
                <ul className="w-[80%] mb-6">
                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between"
                    >
                      <span className="text-md font-semibold text-gray-600">
                        {feature}
                      </span>
                      <CheckIcon className=" text-green-500" />
                    </div>
                  ))}
                </ul>
                <div className="text-3xl font-bold mb-3">$1000</div>
                <p className="text-gray-500 mb-6">Per month, per provider</p>
                <Button>
                  <Link to={plan.link}>Choose Premium</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
