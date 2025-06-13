import { useNavigate } from "react-router-dom";
import { IAssetsList } from "../../../Interfaces";
import toast from "react-hot-toast";

interface IProps {
    assets: IAssetsList[];
    
}

const AssetsListTab = ({ assets }: IProps) => {
    const navigate=useNavigate()

    const handleAssetClick= (asset: IAssetsList) => {
            if (asset.status !== "FINISHED") {
                toast.error("Scan is still in progress. Please wait until it finishes.");
                return;
            }
            navigate(`/scanName/${asset.id}`, { state: { from: "assets" } });
    };
    
    return (
        <div className="mt-5">
            <div className="overflow-x-auto bg-primary-400 border border-[#ececece1] dark:border-transparent rounded-[14px] p-[14px] pb-[10px] ">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-primary-100 text-grey-100 rounded-t-lg font-medium  ">
                            <th className="px-7 py-[13px] text-sm text-left rounded-l-lg ">Asset</th>
                            <th className="px-7 py-[13px] text-sm text-left">Start Scan Time</th>
                            <th className="px-7 py-[13px] text-sm text-center rounded-r-lg">Status</th>
                        </tr>
                    </thead >
                    <tbody>
                        <tr>
                            <td colSpan={7} className="py-2"></td>
                        </tr>
                        {assets.map((asset, index) => (
                            <tr 
                                key={asset.id} 
                                className={`text-center text-sm text-grey-100 font-medium border-b border-[#F3F3F3] dark:border-transparent hover:bg-primary-200 transition-colors duration-200 hover:cursor-pointer ${
                                    index === assets.length - 1 ? "border-b-0" : ""
                                }`}
                                onClick={() => handleAssetClick(asset)}
                            >
                                <td className="px-[13px] py-[30px] text-[13px] text-grey-100 text-sm text-left  font-medium rounded-l-2xl ">
                                    {asset.target}
                                </td>
                                <td className="px-[13px] py-[30px] text-[13px] text-grey-100 text-sm text-left font-medium">{asset.startDate}</td>
                                <td className="px-[13px] py-[30px] text-sm rounded-r-2xl">
                                    <span
                                        className={`flex justify-center items-center font-medium ${
                                            asset.status === "RUNNING"
                                                ? "text-[#6366F1]"
                                                : asset.status === "FINISHED"
                                                ? "text-[#01B433]"
                                                : "text-[#BC9E00]"
                                        }`}
                                    >
                                        {asset.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default AssetsListTab;
