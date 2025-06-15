import Input from "../../Components/UI/Input";
import Button from "../../Components/UI/Button";
import { loginSchema } from "../../Validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import ErrorMsg from "../../Components/UI/ErrorMsg";

interface IFormInput {
  email: string;
  password: string;
}

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useUser();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(loginSchema),
  });

  // تسجيل الدخول باستخدام API حقيقي
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
      if (!response.ok) {
        throw new Error('فشل تسجيل الدخول. تأكد من البيانات');
      }
      const result = await response.json();
      // يفترض أن الاستجابة فيها { token, user }
      localStorage.setItem('token', result.token);
      setUser(result.user);
      setIsLoading(false);
      navigate('/');
    } catch (error) {
      setIsLoading(false);
      alert(error.message || 'حدث خطأ أثناء تسجيل الدخول');
    }
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
                isLoading={isLoading}
              >
                Log in
              </Button>
              <p className="text-md text-gray-400 mt-4">
                Can’t log in?{" "}
                <a href="#" className="text-black hover:underline">
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
