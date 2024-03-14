import Carasol from "@/components/ui/carasol";
import { Button } from "@/components/ui/button";
import { SetStateAction, useState } from "react";
import { CheckIcon, StarIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation();
  const plans = [
    {
      name: "Basic",
      icon: "fa-bolt",
      price: 100,
      features: ["Appointments", "Medical Records", "Billing", "Telemedicine"],
    },
    {
      name: "Standard",
      icon: "fa-heart",
      price: 500,
      features: ["Appointments", "Medical Records", "Billing", "Telemedicine"],
    },
    {
      name: "Premium",
      icon: "fa-star",
      price: 1000,
      features: ["Appointments", "Medical Records", "Billing", "Telemedicine"],
    },
  ];
  const [searchText, setSearchText] = useState("");
  const setSearch = () => {
    console.log("Search button clicked");
  };

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchText(event.target.value);
  };
  return (
    <>
      <Carasol />
      <section className="container mx-auto mt-8 p-3">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="badge">Excelus MedAssits</div>
          <h2 className="text-3xl font-bold tracking-tighter text-seconadry sm:text-4xl md:text-5xl/none">
            {t("home.header")}
          </h2>
          <p className="max-w-[900px] pb-9 text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
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
                onChange={handleInputChange}
              />
              <button
                onClick={setSearch}
                className="bg-primary whitespace-nowrap w-[35%] sm:w-[40%] rounded-e-md h-full px-4 text-light"
              >
                <i className="fa-solid fa-magnifying-glass"></i> Search
              </button>
            </div>
            <h5 className={searchText ? "w-full" : "hidden"}>
              Showing Result of :{" "}
              <span className="text-primary">{searchText}</span>
            </h5>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-3 flex items-center justify-center flex-col">
        <div className="w-full my-4">
          <h1 className="font-bold text-center w-full text-primary text-4xl sm:text-5xl">
            {t("plan.0.header")}
          </h1>
          <p className="mx-auto text-center mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            {t("plan.0.para")}
          </p>
        </div>

        <div className="flex flex-wrap gap-6 w-full justify-between mb-4">
          {plans.map((plan, index) => (
            <div
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
                <Button>Choose Premium</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
