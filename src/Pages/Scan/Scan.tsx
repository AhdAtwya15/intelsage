import Topbar from "../../Components/Global/Topbar/Topbar";
import { CiSearch } from "react-icons/ci";
import Button from "../../Components/UI/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { scanSchema } from "../../Validation";
import { useForm, SubmitHandler } from "react-hook-form";
import ErrorMsg from "../../Components/UI/ErrorMsg";
import { useState } from "react";
import axiosInstance from "../../Config/axios.config";
import {  useMutation, useQueryClient } from "@tanstack/react-query";
import UseAuthenticatedQuery from "../../Hooks/UseAuthenticatedQuery";
import { IPagination, IScanList } from "../../Interfaces";
import ScanListTab from "../../Components/UI/Tabels/ScanListTab";
import ScanListSkeleton from "../../Components/UI/Skeletons/ScanListSkeleton";
import Paginator from "../../Components/UI/Paginator";




interface IScanData {
  scanName: string;
  scanTarget: string;
}

const Scan = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [expanded, setExpanded] = useState(false);
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IScanData>({
    resolver: yupResolver(scanSchema),
    mode: "onChange",
  });


  const { data,isLoading} = UseAuthenticatedQuery({
        queryKey: ["scans", currentPage.toString()], 
        url: `v1/scan/list?page=${currentPage}&pageSize=5`
    });

    const scans: IScanList[] = data?.data || [];
    const pagination: IPagination =
        data?.pagination || { currentPage: 1, pageSize: 5, totalCount: "0", totalPages: 1 };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

  const startScanMutation = useMutation({
    mutationFn: async (inputsData: IScanData) => {
      const {data} = await axiosInstance.post(
        "/v1/scan/start",
        {
          scanname: inputsData.scanName,
          scantarget: inputsData.scanTarget,
        },
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["scans"] });
    },
    onError: (error) => {
      console.error("Error starting scan:", error);
    },
  });
  const onSubmit: SubmitHandler<IScanData> = (data) => {
    startScanMutation.mutate(data);
  };

  return (
    <div className="h-screen p-5 bg-primary-500 text-grey-100 font-roobert">
      <Topbar pageTitle="Scan Page" />
      <form
        className="flex flex-col rounded-xl px-5 py-4 mt-4 bg-primary-400 border-[1px] border-[#ececece1] dark:border-none"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="font-medium text-lg mb-8">Start a New Scan</div>
        <div className="flex justify-between flex-wrap lg:flex-nowrap mb-6">
          <div className="flex gap-4">
            <div className="relative">
              <CiSearch className="absolute text-lg left-3 top-3  text-grey-500" />
              <input
                type="text"
                placeholder="Scan name"
                className={`bg-primary-400 text-sm w-72 px-9 py-2 rounded-lg text-grey-500 placeholder:text-[12px] placeholder-grey-500 focus:outline-none border-[0.5px] ${
                  errors.scanName
                    ? "border-red-500"
                    : "border-[#e2e2e2] dark:border-grey-500"
                }`}
                {...register("scanName")}
              />
              <div className="error-container">
                {errors["scanName"] && <ErrorMsg msg={errors["scanName"]?.message} />}
              </div>
            </div>
            <div className="relative">
              <CiSearch className="absolute text-lg left-3 top-3  text-grey-500" />
              <input
                type="text"
                placeholder="Scan target"
                className={`bg-primary-400 text-sm w-72 px-9 py-2 rounded-lg text-grey-500 placeholder:text-[12px] placeholder-grey-500 focus:outline-none border-[0.5px] ${
                  errors.scanTarget
                    ? "border-red-500"
                    : "border-[#e2e2e2] dark:border-grey-500"
                }`}
                {...register("scanTarget")}
              />
              <div className="error-container">
                {errors["scanTarget"] && <ErrorMsg msg={errors["scanTarget"]?.message} />}
              </div>
            </div>
          </div>
          <div className="ml-3 lg:ml-0 mt-8 lg:mt-1">
            <Button type="submit" size="sm" isLoading={startScanMutation.status === "pending"}>
              {startScanMutation.status === "pending" ? "Starting..." : "Start Scan"}
            </Button>
          </div>
        </div>
      </form>

      <div className="h-[444.8px]">
      {
        isLoading?
        <ScanListSkeleton/>
        :(
          <ScanListTab
          scans={scans}
          />
        )
      }
      </div>

      {!isLoading && (
        <Paginator
          totalPages={pagination.totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          expanded={expanded} 
          setExpanded={setExpanded} 
        />
      )}
    </div>
    
  );
};

export default Scan;


