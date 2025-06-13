import { useLocation, useNavigate } from "react-router-dom";
import { ISummary } from "../../../Interfaces";


interface IProps {
    summaries: ISummary[];
    scanId: string;
}
interface LocationState {
    from?: string;
}

const SummariesListTab = ({ summaries, scanId }: IProps) => { 
    const navigate = useNavigate();
    const location = useLocation();

    const handleSummaryClick = (scanId: string, eventRes: string) => {
        const state = location.state as LocationState; 
        navigate(`/scanType/${scanId}/${eventRes}`, { state }); 
    };

    return (
        <div className="mt-3">
            <div className="overflow-x-auto bg-primary-400 border border-[#ececece1] dark:border-none rounded-[14px] pt-[14px] px-4 pb-2">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-primary-100 text-grey-100 rounded-t-lg font-medium text-sm text-center">
                            <th className="pl-10 py-3 text-left rounded-l-lg">Type</th>
                            <th className="px-7 py-3 text-center">Unique Data Element</th>
                            <th className="px-7 py-3 text-center">Total Data Element</th>
                            <th className="pr-14 py-3 text-right rounded-r-lg">Last Data element Found</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={4} className="py-2"></td>
                        </tr>
                        {summaries.map((summary, index) => (
                            <tr
                                key={index}
                                onClick={() => handleSummaryClick(scanId, summary.type)}
                                className={`text-grey-100 text-sm font-medium text-[13px] hover:bg-primary-200 transition-colors duration-200 hover:cursor-pointer
                                    ${index % 2 === 0 ? 'border-y border-[#F3F3F3] dark:border-gray-700 hover:border-transparent' : ''}
                                    ${index === 0 ? 'border-t-0' : ''}
                                    ${index === summaries.length - 1 ? 'border-b-0' : ''}`}
                            >
                                <td className="pl-5 py-4 text-left rounded-l-2xl">
                                    {summary.typeName}
                                </td>
                                <td className="px-7 py-4 text-center">
                                    {summary.uniqueDataElement}
                                </td>
                                <td className="px-7 py-4 text-center">
                                    {summary.totalDataElement}
                                </td>
                                <td className="pr-14 py-4 text-right rounded-r-2xl">
                                    {summary.lastDataElementIdentified}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SummariesListTab;