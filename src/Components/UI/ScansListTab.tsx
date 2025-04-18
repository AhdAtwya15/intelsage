import { GoTrash } from "react-icons/go";
import { IScanList } from "../../Interfaces";
import Button from "./Button";
import Paginator from "./Paginator";
interface IProps
{
    scans:IScanList[];
    totalPages:number;
    currentPage:number;
    onPageChange:(page:number)=>void;
    onRescan:(scanID:string)=>void;
    onDelete:(scanID:string)=>void;
}

const ScanListTab = ({scans,totalPages,currentPage,onPageChange,onRescan,onDelete}:IProps) => {
    return (
    <div className="mt-5 ">
        <div className="overflow-x-auto border  border-[#ececece1]  dark:border-none rounded-lg">
            <table className="min-w-full border-collapse   ">
                <thead>
                    <tr className="bg-primary-300 text-grey-100">
                        <th className="px-4 py-[8px] text-sm font-normal flex pl-20">Assets Name</th>
                        <th className="px-4 py-[8px] text-sm font-normal">Status</th>
                        <th className="px-4 py-[8px] text-sm font-normal flex justify-end pr-28">Actions</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {scans.map((scan,index)=>(
                        <tr
                            key={scan.scanId}
                            className={
                                `${index % 2 === 0 ? "bg-primary-400":"bg-primary-300"}`
                            }
                        >
                            <td className="pl-14 py-[7px] text-grey-100 text-sm">{scan.scanTarget}</td>
                            <td className="px-4 py-[7px]">
                                <span className={
                                    `flex justify-center items-center text-sm font-medium 
                                    ${scan.scanStatus==="RUNNING"
                                        ?"text-[#F5AD74]"
                                        :"text-[#3AC344]"
                                    }`}
                                    >
                                        {scan.scanStatus === "RUNNING" ? "Ongoing" : "Finished"}
                                </span>
                            </td>
                            <td className="px-4 py-[7px] flex justify-end pr-14  gap-3">
                                <Button type="button" variant="rescan" size="md" onClick={()=>onRescan(scan.scanId)}>
                                    Rescan
                                </Button>
                                <button className="px-2 py-[4px] bg-[#FFF4F4] hover:bg-[#FF0000]  text-[#FF0000] hover:text-[#FFF4F4] rounded-[4px]" onClick={()=>onDelete(scan.scanId)}>
                                    < GoTrash className=" text-xl "/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <Paginator
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
    />
    </div>
    )
}

export default ScanListTab;