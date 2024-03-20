import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterSchema, RegisterSchemaType } from "@/schemas";
import { useParams } from "react-router-dom";
import { ApiRequest } from "@/apis";
import { toast } from "react-toastify";
import { useState } from "react";
const Register = () => {
  const [active, setActive] = useState(false);
  const { subscriptionType } = useParams<{
    subscriptionType: "basic" | "standard" | "premium";
  }>();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
  });
  const registerSubmit: SubmitHandler<RegisterSchemaType> = async (val) => {
    const data = { ...val, ...{ subscriptionType: subscriptionType } };
    await ApiRequest<RegisterSchemaType>("POST", "/auth/register", data);
    toast.success("User Successfully Regitered");
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
    reset();
  };

  return (
    <div className="container mx-auto p-3 flex-center md:py-8">
      <div className="flex max-md:flex-wrap w-full max-w-4xl rounded-3xl py-5 shadow-xl border">
        <div className="mx-auto max-w-sm space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-bold">Register Now</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Get Started on Your Health Journey with Excelus MedAssits Signup
            </p>
          </div>
          <form onSubmit={handleSubmit(registerSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="first-name">UserName</label>
                <input {...register("username")} placeholder="name" required />
              </div>
              {errors.username && (
                <span className="text-red-500">{errors.username.message}</span>
              )}
              <div className="space-y-2">
                <label htmlFor="last-name">Full Name</label>
                <input
                  {...register("fullname")}
                  placeholder="Fullname"
                  required
                />
              </div>
              {errors.fullname && (
                <span className="text-red-500">{errors.fullname.message}</span>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="email">Email Address</label>
              <input
                {...register("email")}
                placeholder="jane@example.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email">Mobile Number</label>
              <input
                {...register("mobile")}
                placeholder="enter Mobile Number"
                required
                type="number"
              />
              {errors.mobile && (
                <span className="text-red-500">{errors.mobile.message}</span>
              )}
            </div>
            <div className="space-y-2 space-x-4">
              <label htmlFor="password">Create a Password</label>
              <input
                {...register("password")}
                id="password"
                required
                type="password"
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>

            <div className="space-y-2">
              <label className="flex items-start" htmlFor="terms">
                <span className="ml-2 leading-none">
                  I agree to the
                  <Link className="underline" to="#">
                    terms and conditions
                  </Link>
                </span>
                <input
                  type="checkbox"
                  onClick={() => setActive(!active)}
                  id="terms"
                  required
                />
              </label>
            </div>
            <Button disabled={!active} className="w-full" type="submit">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
