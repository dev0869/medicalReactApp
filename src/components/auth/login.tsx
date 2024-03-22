import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

import { LoginSchema, LoginSchemaType } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { ApiRequest } from "@/apis";
import { toast } from "react-toastify";
const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = async (data) => {
    const res = await ApiRequest<LoginSchemaType>("POST", "/auth/login", data);
    toast.success(res.message);
    localStorage.setItem("token", res.token);
    reset();
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };
  return (
    <>
      <div className=" gap-4 flex h-screen items-center justify-center">
        <div className=" flex-[6] h-full linerBg ">
          <div className="flex gap-2 justify-center rounded-lg p-4">
            <div className="flex   box-border mt-10 ml-10  flex-col   items-end mb-6">
              <img src="/p1.svg" className="mb-2 max-h-36 max-w-36" />
              <img src="/p2.svg" />
            </div>
            <div className="flex box-border mt-0 mb-5  flex-col items-start ">
              <img src="/p3.svg" className="mb-2 max-h-36 max-w-36" />
              <img src="/p4.svg" style={{ maxHeight: "136px" }} />
            </div>
          </div>
          <div className="text-2xl  ml-40 text-white text-center font-bold mr-32 break-words leading-normal">
            India’s only AI-driven personalised
            <br />
            health platform, built to suit your needs!
          </div>
          <div className="flex flex-col ml-60   w-[50%] mx-auto rounded-lg ">
            <div className="flex items-center text-indigo-100 font-pn-semibold mt-4">
              <Check className="text-green-500 mr-2" />
              <div>
                <span>10,000+</span> service partners across India
              </div>
            </div>
            <div className="flex items-center text-indigo-100 font-pn-semibold mt-4">
              <Check className="text-green-500 mr-2" />

              <div>
                <span>4.5+</span> star user satisfaction rating
              </div>
            </div>
            <div className="flex items-center text-indigo-100 font-pn-semibold mt-4">
              <Check className="text-green-500 mr-2" />

              <div>
                <span>24x7</span> access to experienced doctors and therapists
              </div>
            </div>
            <div className="flex items-center text-indigo-100 font-pn-semibold mt-4">
              <Check className="text-green-500 mr-2" />

              <div>
                <span>22,000+</span> serviceable pincodes for e-pharmacy
              </div>
            </div>
          </div>
        </div>
        <div className=" flex-[3] flex-col p-4 items-center justify-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
            <img src="/logo.png" className="border-3 mx-auto" alt="logo " />
            <div className="text-bannerBackground pt-4 text-[#262C7F] text-center text-2xl font-[800] mb-4">
              LOGIN
            </div>
            <div className="text-lightBlue para text-center font-semibold text-sm ">
              Explore personalised health benefits crafted just for you
            </div>
            <div className="mb-4">
              <label className="text-md font-semibold ml-1 text-[#262C7F]">
                Enter UserName
              </label>
              <input
                {...register("username")}
                className="form-input w-full"
                placeholder="UserName"
                type="text"
              />
            </div>
            {errors.username && (
              <span className="text-red-500">{errors.username.message}</span>
            )}

            <div className="mb-4">
              <label className="text-md font-semibold ml-1 text-[#262C7F]">
                Enter Password
              </label>
              <input
                {...register("password")}
                className="form-input w-full"
                placeholder="Password"
                type="password"
              />
            </div>
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
            <div className="mb-6 flex flex-wrap gap-2 items-center justify-between">
              <a href="#" className="text-sm text-blue-600">
                Forgot password?
              </a>
            </div>
            <Button
              type="submit"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mb-4 w-full bg-blue-600 text-light"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
