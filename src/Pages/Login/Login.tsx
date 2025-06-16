import Input from "../../Components/UI/Input";
import Button from "../../Components/UI/Button";
import { loginSchema } from "../../Validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import ErrorMsg from "../../Components/UI/ErrorMsg";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../Config/axios.config";
import { ILoginRes } from "../../Interfaces";
import { useUser } from "../../context/useUser";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";

interface IFormInput {
  email: string;
  password: string;
}
interface IResError{
  message:string
}

const Login = () => {
  const[errorMsgLogin,setErrorMsgLogin]=useState<string>("")
  const { setUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/"); 
    }
  }, [navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(loginSchema),
  });

  const loginMutation = useMutation({
    mutationFn: async (inputsData: IFormInput) => {
      const {data} = await axiosInstance.post(
        "/v1/auth/login",
        {
          email: inputsData.email,
          password: inputsData.password,
        },
      );
      return data;
    },
    onSuccess: (result:ILoginRes) => {
            const token = result.data.token;
            const user = result.data.user;
            localStorage.setItem("token", token);
            setUser(user);
            navigate("/");
    },
    onError: (error: AxiosError<IResError>) => {
      
      const apiMessage = error.response?.data?.message;
      setErrorMsgLogin(apiMessage ?? "Can't log in, please try again")
      //toast.error(apiMessage ?? "Can't log in, please try again");
    },
  });

  
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    loginMutation.mutate(data)
    
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-0 h-screen bg-white font-roobert">
      <div className="login-sec col-span-1 md:col-span-5 flex items-center justify-center p-4 md:p-8 bg-white">
        <div className="log-info max-w-md w-[410px] mx-auto">
          <h2 className="text-2xl font-normal mb-2 whitespace-nowrap">
            Secure Access to Your Insights
          </h2>
          <p className="text-md text-gray-500 mb-8 font-light">
            Log in to monitor your company’s digital footprint and uncover
            potential threats before they become risks.
          </p>
          {
            errorMsgLogin &&
            <div className="p-4 mb-6 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
              <span className="font-medium">{errorMsgLogin}</span> 
            </div>
          }
          <form className="space-y-6 w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container relative w-full">
              <Input
                type="email"
                label="E-mail"
                placeholder="example@gmail.com"
                icon="email"
                {...register("email")}
              />
              {errors["email"] && <ErrorMsg msg={errors["email"]?.message} />}
            </div>
            <div className="input-container relative w-full">
              <Input
                type="password"
                label="Password"
                placeholder="********"
                icon="password"
                {...register("password")}
              />
              {errors["password"] && (
                <ErrorMsg msg={errors["password"]?.message} />
              )}
            </div>
            <div className="space-y-4 flex flex-col ">
              <Button
                type="submit"
                className="mb-4 w-full"
                isLoading={loginMutation.status === "pending"}
              >
                Log in
              </Button>
              <p className="text-md text-gray-400 mt-4">
                Can’t log in?{" "}
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ahdatwya@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline"
                >
                  Contact us
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="info-sec col-span-1 md:col-span-7 relative text-white flex items-center justify-center h-full ">
        <div className="absolute inset-0 w-full h-full p-3 ">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src="/src/assets/loginPic.jpeg"
            alt="IntelSega"
          />
          <div className="absolute inset-0 p-3 box-border bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-3xl w-[calc(100%-1.5rem)] h-[calc(100%-1.5rem)] flex flex-col justify-end mx-auto my-auto ">
            <div className="relative  text-white md:p-6 py-9 rounded-lg mx-auto  md:mb-14 sm:mb-3 mb-3 md:mt-0  md:h-auto h-28   ">
              <span className="absolute top-[-10px] left-[5px] text-5xl font-bold text-black [text-stroke:2px_white] [-webkit-text-stroke:2px_white] md:visible invisible ">
                “
              </span>
              <p className="p-one  text-md md:leading-relaxed">
                IntelSage empowers businesses with advanced OSINT capabilities,
                providing deep insights and actionable intelligence.
              </p>
              <p className="p-two  text-md md:leading-relaxed md:mt-4 mt-0 md:visible invisible">
                With powerful data analysis, seamless integrations, and a focus
                on security, our solution helps you uncover critical information
                while maintaining operational integrity.
              </p>
              <span className="absolute bottom-[-23px] right-[40px] text-5xl font-bold text-black [text-stroke:2px_white] [-webkit-text-stroke:2px_white] md:visible invisible">
                ”
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
