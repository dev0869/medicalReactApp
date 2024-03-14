import useAuthVerifyHooks from "@/hooks/useAuthHooks";

const MainProfile = () => {
  const { data } = useAuthVerifyHooks();
  console.log(data);
  return (
    <>
      <section className=" relative bg-blueGray-50">
        <div className="w-full mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex items-center gap-2">
                <img
                  src={
                    data?.role === "user"
                      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmPf2bjChPYb0KClfaFIxcCYyMuDb5yHVTkrmz8O61-Q&s"
                      : data?.role === "doctor"
                      ? "data:image/jpeg;base64,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"
                      : "data:image/jpeg;base64,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"
                  }
                  alt="img"
                  width={60}
                />
                <p className="text-blueGray-700 text-xl font-bold">
                  {data?.name}
                </p>
              </div>
            </div>
            <hr className="mx-6 border-b-1 border-blueGray-300" />
            <div className="flex-auto mt-3 px-4 lg:px-10 py-10 pt-0">
              <div className="flex  flex-wrap">
                <div className="w-full lg:w-6/12 md:px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block mt-4 uppercase text-gray-600 text-xs font-[900] mb-2"
                      htmlFor="grid-password"
                    >
                      UserName
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      disabled
                      placeholder={data?.username}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 md:px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block mt-4 uppercase text-gray-600 text-xs font-[900] mb-2"
                      htmlFor="grid-password"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      disabled
                      placeholder={data?.fullname}
                    />
                  </div>
                </div>

                <div className="w-full lg:w-6/12 md:px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block mt-4 uppercase text-gray-600 text-xs font-[900] mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      disabled
                      placeholder={data?.email}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 md:px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block mt-4 uppercase text-gray-600 text-xs font-[900] mb-2"
                      htmlFor="grid-password"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="number"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      disabled
                      placeholder={data?.mobile}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainProfile;
