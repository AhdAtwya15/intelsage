import Topbar from "../Topbar/Topbar";
import { CiSearch } from "react-icons/ci";
import Button from "../../Components/UI/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { scanSchema } from "../../Validation";
import { useForm, SubmitHandler } from "react-hook-form";
import ErrorMsg from "../../Components/UI/ErrorMsg";
import { useState } from "react";
import axiosInstance from "../../Config/axios.config";

interface IScanData {
  scanName: string;
  scanTarget: string;
}

const Scan = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IScanData>({
    resolver: yupResolver(scanSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IScanData> = async (data) => {
    setIsLoading(true);
    try {
      const res = await axiosInstance.post(
        "/v1/scan/start",
        {
          scanname: data.scanName,
          scantarget: data.scanTarget,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", res.data);
    } catch (error) {
      console.error("Error starting scan:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen p-8 bg-primary-500 text-grey-100 font-roobert">
      <Topbar pageTitle="Scan Page" />
      <form
        className="flex flex-col rounded-xl p-5 mt-5 bg-primary-400 border-[1px] border-[#ececece1] dark:border-none"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="font-medium text-lg mb-8">Start a New Scan</div>
        <div className="flex justify-between flex-wrap lg:flex-nowrap mb-6">
          <div className="flex gap-4">
            <div className="relative">
              <CiSearch className="absolute text-lg left-3 top-3 text-grey-500" />
              <input
                type="text"
                placeholder="Scan name"
                className={`bg-primary-400 text-sm w-72 pl-10 pr-10 py-3 rounded-lg text-grey-500 placeholder:text-[12px] placeholder-grey-500 focus:outline-none border-[0.5px] ${
                  errors.scanName
                    ? "border-red-500"
                    : "border-[#e2e2e2] dark:border-grey-500"
                }`}
                {...register("scanName")}
              />
              {errors["scanName"] && <ErrorMsg msg={errors["scanName"]?.message} />}
            </div>
            <div className="relative">
              <CiSearch className="absolute text-lg left-3 top-3 text-grey-500" />
              <input
                type="text"
                placeholder="Scan target"
                className={`bg-primary-400 text-sm w-72 pl-10 pr-10 py-3 rounded-lg text-grey-500 placeholder:text-[12px] placeholder-grey-500 focus:outline-none border-[0.5px] ${
                  errors.scanTarget
                    ? "border-red-500"
                    : "border-[#e2e2e2] dark:border-grey-500"
                }`}
                {...register("scanTarget")}
              />
              {errors["scanTarget"] && <ErrorMsg msg={errors["scanTarget"]?.message} />}
            </div>
          </div>
          <div className="ml-3 lg:ml-0 mt-8 lg:mt-0">
            <Button type="submit" size="sm">
              {isLoading ? "Starting..." : "Start Scan"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Scan;

