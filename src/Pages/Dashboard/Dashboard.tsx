import React, { useState, useEffect } from "react";
import { IAssetsList } from "../../Interfaces";
import { useNavigate } from "react-router-dom";
import Topbar from "../../Components/Global/Topbar/Topbar";
import { AiOutlineScan } from "react-icons/ai";
import { LuShieldCheck } from "react-icons/lu";
import LatestScansChart from "../../Components/LatestScansChart/LatestScansChart";
import { PiBuildingsLight } from "react-icons/pi";
import { TbShieldSearch } from "react-icons/tb";
import Button from "../../Components/UI/Button";
import axios from "axios";
import { toast } from "react-toastify";

interface CardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode; 
}

const Dashboard = () => {
  
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [assetsData, setAssetsData] = useState<any>(null);
  


  function getDashboard() {
    setIsLoading(true);
    axios
      .get(`http://localhost:3000/api/v1/dashboard`)
      .then((res) => {
        console.log('API Response!', res.data.data);
        
        setDashboardData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error fetching Data!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  
  function getAssets() {
    setIsLoading(true);
    axios
      .get(`http://localhost:3000/api/v1/scan/assets`)
      .then((res) => {
        console.log('API Response!', res.data.data);
        
        setAssetsData(res.data.data.assets);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error fetching Data!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  
  useEffect(() => {
    getDashboard();
    getAssets();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen p-5 bg-primary-500  transition-colors ">
      <Topbar pageTitle="Main Dashboard" />

      <div className="grid grid-cols-10 gap-6 pt-6">
        <div className="col-span-10 md:col-span-7 space-y-4">
          <div className="grid xl:grid-cols-4  md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
            <Card
              title="Total Scans"
              value={dashboardData?.totalScans ?? "0"}
              icon={<AiOutlineScan className=" icon1 text-4xl" />}
            />
            <Card
              title="Total Assets"
              value={dashboardData?.totalAssets ?? "0"}
              icon={<PiBuildingsLight className=" icon2 text-4xl" />}
            />
            <Card
              title="Ongoing Scan"
              value={dashboardData?.ongoingScans ?? "0"}
              icon={<TbShieldSearch className=" icon3 text-4xl" />}
            />
            <Card
              title="Finished Scan"
              value={dashboardData?.finishedScans ?? "0"}
              icon={<LuShieldCheck className=" icon4 text-4xl" />}
            />
          </div>

          <LatestScansChart
            data={(dashboardData?.scansByYear || []).map((item: any) => ({
              year: item.year,
              scans: Number(item.count),
            }))}
          />

          <div className="border rounded-xl bg-primary-300 dark:border-none p-5">
            <div className="flex justify-between items-center mb-3">
              <span className="text-grey-100 text-lg font-medium">
                Assets
              </span>
              <button className="bg-black dark:bg-gray-700 text-white text-sm rounded-md w-[68px] h-[33px]">
                See all
              </button>
            </div>

            <div className="space-y-3">
            {assetsData?.length > 0 ? 
  assetsData?.map((asset: IAssetsList, index: number) => (
    <div key={index} className="flex items-center justify-between dark:bg-[#2E394C] p-4 rounded-xl border-[1px] border-[#ececece1] dark:border-none cursor-pointer hover:bg-primary-200 transition"
      onClick={() => asset?.id && navigate(`/scanName/${asset.id}`, { state: { from: 'assets' } })}
    >
      <div className="flex flex-col">
        <span className="text-grey-100 text-xs">
          {asset?.target}
        </span>
      </div>
      <Button variant="safe" size="xsm">
        {asset?.status}
      </Button>
    </div>
  )) : <p className="text-center"> NO ASSETS</p>}




            </div>
          </div>
        </div>

        <div className="col-span-10 md:col-span-3  space-y-4">
          <div className="bg-primary-300  rounded-2xl border-[1px] border-[#ececece1] dark:border-none text-center min-w-64 py-24">
            <h2 className="text-grey-100 font-medium text-lg mb-2">
              Detect Threats, Defend Fast
            </h2>
            <p className="text-grey-600 text-xs mb-4">
              Scan company assets for potential threats in real time
            </p>
            <button
              className="bg-black dark:bg-gray-700 text-white text-xs mt-6 px-12 py-3 rounded-md"
              onClick={() => navigate("/scan")}
            >
              Initiate a scan
            </button>
          </div>

          <div className="bg-primary-300  p-5 rounded-2xl border dark:border-none shadow-lg min-w-64">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg text-grey-100">
                Latest scans
              </span>
              <button className="bg-black dark:bg-gray-700 text-white text-sm rounded-md w-[68px] h-[33px]">
                See all
              </button>
            </div>

            <div className="space-y-3 min-h-[400px] overflow-y-auto">
              {dashboardData?.latestScans?.length > 0 ?
                dashboardData?.latestScans?.map((scan: any, index: number) => (
                   <div
                     key={index}
                     className="flex items-center justify-between p-3 rounded-md bg-transparent"
                    
                   >
                     <div>
                       <p className="text-sm font-medium text-grey-100 mb-2">
                         {scan?.name || "Unknown Asset"}
                       </p>
                       <p className="text-xs text-grey-600">
                         {new Date(scan?.startDate).toLocaleString()}
                       </p>
                     </div>
                     <div className="flex flex-col items-end gap-1">
                       <span className="text-sm font-semibold text-grey-100 mb-2">
                         {scan?.elementsFound|| 0}
                       </span>
                       <div className="flex items-center gap-1">
                         <span
                           className="w-[8px] h-[8px] rounded-sm"
                           style={{ backgroundColor: "#34B1FF" }}
                         ></span>
                         <span className="text-sm font-semibold text-grey-100">
                           {scan?.status || "Finished"}
                         </span>
                       </div>
                     </div>
                   </div>
                 )) : <p className="text-center">NO Latest Scans</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, value, icon }: CardProps) => (
  <div className="flex min-w-48 items-center font-roobert bg-primary-400 rounded-lg p-4 border-[1px] border-[#ececece1] dark:border-none  transition-colors ">
    <div className="text-3xl">{icon}</div>
    <div className="ml-4">
      <p className="text-sm font-medium text-grey-600 whitespace-nowrap mt-4">
        {title}
      </p>
      <h3 className="text-xl font-semibold text-grey-100 ">
        {value}
      </h3>
    </div>
  </div>
);

export default Dashboard;
