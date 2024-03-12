import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../ui/button";
import { LoginSchema, LoginSchemaType } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { ApiRequest } from "@/apis";
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
    const res = await ApiRequest<LoginSchemaType>("POST","/auth/login", data);
    console.log(res);
    localStorage.setItem("token", res.token);
    reset();
    window.location.href="/"
  };

  return (
    <div className="container mx-auto p-3 flex-center md:py-20">
      <div className="flex max-md:flex-wrap w-full max-w-4xl rounded-3xl p-8 shadow-xl border">
        <div className="flex md:w-1/2 mx-auto flex-col items-center justify-center rounded-l-3xl md:p-12">
          <img
            src="https://webglobals.com.au/wp-content/uploads/2024/01/security-setting.jpg"
            alt="login-icon"
            className="h-20 w-40 object-contain"
          />
          <h1 className="text-2xl font-bold">Welcome home</h1>
          <p className="mb-8 text-sm text-gray-500">
            Please enter your details.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="mb-4">
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
          <div className="flex w-full items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-sm text-gray-400">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <Button
            type="submit"
            className="inline-flex mt-4 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mb-4 w-full bg-blue-600 text-light"
          >
            Login
          </Button>
        </div>
        <div className="w-[500px] mx-auto flex-center">
          <img
            src="https://img.freepik.com/premium-vector/forgot-password-account-login-web-page-protection-security-key-access-system-smartphone-computer-flat-vector-illustration_2175-1401.jpg?w=740"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
