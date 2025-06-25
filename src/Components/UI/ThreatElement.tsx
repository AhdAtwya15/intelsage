import { PiGpsFixLight } from "react-icons/pi";
import { LuCalendarClock } from "react-icons/lu";
import { IAllThreat } from "../../Interfaces";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
interface IProps
{
    allThreat:IAllThreat

}
const ThreatElement = ({ allThreat }: IProps) => {
    const navigate = useNavigate();
  const getRiskColor = (score: string) => {
    const value = parseFloat(score);

    if (value >= 1 && value < 3) {
      return "bg-[#3ac3438f] text-[#3AC344]";
    } else if (value >= 3 && value < 6) {
      return "bg-[#34b1ff6a] text-[#34B1FF]";
    } else if (value >= 6 && value < 8) {
      return "bg-[#dfa00022] text-[#DFA000]";
    } else if (value >= 8 && value <= 10) {
      return "bg-[#ff373725] text-[#FF3737]";
    } else {
      return "bg-gray-200 text-gray-600";
    }
  };
  const handleScanClick = (threat:IAllThreat) => {
        if (threat.analysisStatus === "PENDING") {
            toast.error("Scan is still in progress.Please wait until it finishes.");
            return;
        }
        navigate(`/summaryThreat/${threat.id}`);
    };



  return (
    <div className="flex flex-col justify-between w-full min-h-48 h-64 bg-primary-400 rounded-xl p-5 border border-[#ececece1] dark:border-none"
    onClick={() => handleScanClick(allThreat)}>
      
      <div className="mb-4">
        <span className="text-sm font-medium text-grey-100">{allThreat.scanName}</span>
        <p className="text-[10px] text-[#71717A]">{allThreat.scanTarget}</p>
      </div>

      
      <div className="flex justify-between items-center text-sm mb-2">
        <div className="flex items-center gap-1 text-[#717171]">
          <PiGpsFixLight className="text-base" />
          <span>Status</span>
        </div>
        <span
          className={`px-2 py-1 text-xs rounded-lg ${
            allThreat.analysisStatus === "COMPLETED"
              ? "text-[#2563EB] bg-[#2564eb58]"
              : allThreat.analysisStatus === "FAILED"
              ? "text-[#FF3737] bg-[#ff373725]"
              : "text-[#DFA000] bg-[#dfa00022]"
          }`}
        >
          {allThreat.analysisStatus}
        </span>
      </div>

      <div className="flex justify-between items-center text-sm mb-2">
        <div className="flex items-center gap-1 text-[#717171]">
          <PiGpsFixLight className="text-base" />
          <span>Risk Score</span>
        </div>
        <span
          className={`px-2 py-1 text-xs rounded-lg ${getRiskColor(
            allThreat.overallRiskScore
          )}`}
        >
          {allThreat.overallRiskScore}
        </span>
      </div>

    
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-1 text-[#717171]">
          <LuCalendarClock className="text-base" />
          <span>Close Date</span>
        </div>
        <span className="text-xs text-grey-100 font-medium">
          {new Date(allThreat.createdAt).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>
    </div>
  );
};

export default ThreatElement;


