import Topbar from "../Topbar/Topbar";
import { AiOutlineScan } from "react-icons/ai";
import { LuShieldCheck } from "react-icons/lu";
import LatestScansChart from "../../Components/LatestScansChart/LatestScansChart";
import { PiBuildingsLight } from "react-icons/pi";
import { TbShieldSearch } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import { RiMessageLine } from "react-icons/ri";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import Button from "../../Components/UI/Button";
interface CardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}
const Dashboard = () => {
 
  
  const scans = [
    {
      domain: "mycooldomain.com",
      date: "20/2/2025",
      status: "Finished",
      color: "#3AC344",
      count: "1,586",
    },
    {
      domain: "mycooldomain.com",
      date: "20/2/2025",
      status: "Finished",
      color: "#3AC344",
      count: "1,586",
    },
    {
      domain: "mycooldomain.com",
      date: "20/2/2025",
      status: "Finished",
      color: "#3AC344",
      count: "1,586",
    },
    {
      domain: "mycooldomain.com",
      date: "20/2/2025",
      status: "Ongoing",
      color: "#34B1FF",
      count: "1,586",
    },
    {
      domain: "mycooldomain.com",
      date: "20/2/2025",
      status: "Finished",
      color: "#3AC344",
      count: "1,586",
    },
   
  ];

  return (
    <div className="h-screen p-8 bg-primary-500  transition-colors ">
      <Topbar pageTitle="Main Dashboard" />

      <div className="grid grid-cols-10 gap-6 pt-6">
        <div className="col-span-10 md:col-span-7 space-y-4">
          <div className="grid xl:grid-cols-4  md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
            <Card
              title="Total Scans"
              value="720"
              icon={<AiOutlineScan className=" icon1 text-4xl" />}
            />
            <Card
              title="Total Assets"
              value="720"
              icon={<PiBuildingsLight className=" icon2 text-4xl" />}
            />
            <Card
              title="Ongoing Scan"
              value="720"
              icon={<TbShieldSearch className=" icon3 text-4xl" />}
            />
            <Card
              title="Finished Scan"
              value="720"
              icon={<LuShieldCheck className=" icon4 text-4xl" />}
            />
          </div>

          <LatestScansChart />

          <div className="border rounded-xl bg-primary-300 dark:border-none  p-5">
            <div className="flex justify-between items-center mb-3">
              <span className="text-grey-100 text-lg font-medium">
                Assets
              </span>
              <button className="bg-black dark:bg-gray-700 text-white text-sm rounded-md w-[68px] h-[33px]">
                See all
              </button>
            </div>

            <div className="space-y-3">
              {[
                {
                  icon: <SlLocationPin />,
                  text: "102.54.237.XXX",
                  status: "Safe",
                },
                {
                  icon: <RiMessageLine />,
                  text: "user@example.com",
                  status: "Safe",
                },
                {
                  icon: <AiOutlineGlobal />,
                  text: "testsite.net",
                  status: "Compromised",
                },
                {
                  icon: <IoCallOutline />,
                  text: "user@example.com",
                  status: "Safe",
                },
              ].map((asset, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between dark:bg-[#2E394C] p-4 rounded-xl border-[1px] border-[#ececece1] dark:border-none "
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#EDEDED] dark:bg-transparent ">
                    <span className="text-lg text-grey-400">{asset.icon}</span>
                    </div>
                    
                    <span className="text-grey-100 text-xs">
                      {asset.text}
                    </span>
                  </div>
                  <Button  variant={asset.status === "Safe" ? "safe" : "compromised"} size="xsm">
  {asset.status}
</Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-10 md:col-span-3  space-y-4">
          <div className="bg-primary-300  rounded-2xl border-[1px] border-[#ececece1] dark:border-none text-center min-w-64 py-24">
            <h2 className="text-grey-100 font-medium text-lg mb-2">
              Detect Threats, Defend Fast
            </h2>
            <p className="text-grey-600s text-xs mb-4">
              Scan company assets for potential threats in real time
            </p>
            <button className="bg-black dark:bg-gray-700 text-white text-xs mt-6 px-12 py-3 rounded-md">
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
              {scans.map((scan, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-md"
                >
                  <div>
                    <p className="text-sm font-medium text-grey-100 mb-2">
                      {scan.domain}
                    </p>
                    <p className="text-xs text-grey-600">
                      {scan.date}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-sm font-medium text-grey-100 mb-2">
                      {scan.count}
                    </span>
                    <div className="flex items-center gap-1">
                      <span
                        className="w-[8px] h-[8px] rounded-sm"
                        style={{ backgroundColor: scan.color }}
                      ></span>
                      <span className="text-sm font-medium text-grey-100">
                        {scan.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
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
