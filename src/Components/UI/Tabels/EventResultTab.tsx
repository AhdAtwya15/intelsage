
import { IEventResult } from "../../../Interfaces";

interface IProps {
    eventResult: IEventResult[];

}

const EventResultTab = ({ eventResult }: IProps) => {
    
    return (
        <div className="mt-3">
            <div className="overflow-x-auto bg-primary-400 border border-[#ececece1] dark:border-none rounded-[14px] pt-[14px] px-4 pb-2">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-primary-100 text-grey-100 rounded-t-lg font-medium text-sm text-center">
                            <th className="pl-10 py-3 text-left rounded-l-lg">Data Element</th>
                            <th className="px-7 py-3 text-center">Source Data Element</th>
                            <th className="px-7 py-3 text-center">Source Module</th>
                            <th className="pr-14 py-3 text-right rounded-r-lg">Time Identified</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={4} className="py-2"></td>
                        </tr>
                        {eventResult.map((result, index) => (
                            <tr
                                key={index}
                                className={`text-grey-100 text-sm font-medium text-[13px] text-center
                                    ${index % 2 === 0 ? 'border-y border-[#F3F3F3] dark:border-gray-700' : ''}
                                    ${index === 0 ? 'border-t-0' : ''}
                                    ${index === eventResult.length - 1 ? 'border-b-0' : ''}`}
                            >
                                <td className="pl-12 py-4 text-left rounded-l-2xl">
                                    {result.dataElement}
                                </td>
                                <td className="px-7 py-4 text-center">
                                    {result.sourceDataElement}
                                </td>
                                <td className="px-7 py-4 text-center">
                                    {result.sourceModule}
                                </td>
                                <td className="pr-10 py-4 text-right rounded-r-2xl">
                                    {result.lastIdentified}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EventResultTab;