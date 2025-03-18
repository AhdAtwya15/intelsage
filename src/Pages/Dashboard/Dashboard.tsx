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
    <div className="h-screen p-8 bg-lightBg text-lightText dark:bg-screenBg dark:text-darkText transition-colors ">
      <Topbar />

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

          <div className="border shadow-md rounded-xl bg-cardLight dark:bg-cardDark dark:border-none  p-5">
            <div className="flex justify-between items-center mb-3">
              <span className="text-black dark:text-gray-200 text-lg font-semibold">
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
                  className="flex items-center justify-between p-4 rounded-lg border dark:border-borderDark"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{asset.icon}</span>
                    <span className="text-gray-700 dark:text-gray-300 text-xs">
                      {asset.text}
                    </span>
                  </div>
                  <span
                    className={`px-5 py-1 rounded-md ${
                      asset.status === "Safe" ? "safe" : "Compromised"
                    } text-xs`}
                  >
                    {asset.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-10 md:col-span-3  space-y-4">
          <div className="bg-cardLight dark:bg-cardDark border dark:border-none rounded-xl shadow-lg text-center min-w-64 py-24">
            <h2 className="text-gray-800 dark:text-gray-200 font-semibold text-lg mb-2">
              Detect Threats, Defend Fast
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-xs mb-4">
              Scan company assets for potential threats in real time
            </p>
            <button className="bg-black dark:bg-gray-700 text-white text-xs mt-6 px-12 py-3 rounded-md">
              Initiate a scan
            </button>
          </div>

          <div className="bg-cardLight dark:bg-cardDark p-5 rounded-lg border dark:border-none shadow-lg min-w-64">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg text-gray-800 dark:text-gray-200">
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
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                      {scan.domain}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {scan.date}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                      {scan.count}
                    </span>
                    <div className="flex items-center gap-1">
                      <span
                        className="w-[8px] h-[8px] rounded-sm"
                        style={{ backgroundColor: scan.color }}
                      ></span>
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
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

const Card = ({ title, value, icon }) => (
  <div className="flex min-w-48 items-center bg-cardLight dark:bg-cardDark rounded-lg p-4 dark:border-none shadow-md transition-colors ">
    <div className="text-3xl">{icon}</div>
    <div className="ml-4">
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap mt-4">
        {title}
      </p>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        {value}
      </h3>
    </div>
  </div>
);

export default Dashboard;
