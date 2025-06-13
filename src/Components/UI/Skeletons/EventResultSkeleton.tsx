const EventResultSkeleton = () => {
    const rows = Array.from({ length: 8 });

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
                        {rows.map((_, index) => (
                            <tr
                                key={index}
                                className={`text-grey-100 text-sm font-medium text-[13px] text-center hover:bg-primary-200 transition-colors duration-200 hover:cursor-pointer
                                    ${index % 2 === 0 ? 'border-y border-[#F3F3F3] dark:border-gray-700 hover:border-transparent' : ''}
                                    ${index === 0 ? 'border-t-0' : ''}
                                    ${index === rows.length - 1 ? 'border-b-0' : ''}`}
                            >
                                <td className="pl-12 py-5 text-left rounded-l-2xl">
                                    <div role="status" className="flex justify-start animate-pulse">
                                        <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-slate-700"></div>
                                    </div>
                                </td>
                                <td className="px-7 py-5 text-center">
                                    <div role="status" className="flex justify-center animate-pulse">
                                        <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-slate-700"></div>
                                    </div>
                                </td>
                                <td className="px-7 py-5 text-center">
                                    <div role="status" className="flex justify-center animate-pulse">
                                        <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-slate-700"></div>
                                    </div>
                                </td>
                                <td className="pr-7 py-5 text-right rounded-r-2xl">
                                    <div role="status" className="flex justify-end animate-pulse">
                                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-slate-700"></div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EventResultSkeleton;