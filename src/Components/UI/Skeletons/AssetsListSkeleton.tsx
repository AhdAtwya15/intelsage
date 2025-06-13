const AssetsListSkeleton = () => {
    const rows = Array.from({ length: 8 });
    return (
        <div className="mt-5">
            <div className="overflow-x-auto bg-primary-400 border border-[#ececece1] dark:border-transparent rounded-[14px] p-[14px] pb-[10px]">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-primary-100 text-grey-100 rounded-t-lg font-medium">
                            <th className="px-7 py-[13px] text-sm text-left rounded-l-lg">Asset</th>
                            <th className="px-7 py-[13px] text-sm text-left">Start Scan Time</th>
                            <th className="px-7 py-[13px] text-sm text-center rounded-r-lg">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((_, index) => (
                            <tr
                                key={index}
                                className={`border-b border-[#F3F3F3] dark:border-gray-700 ${
                                    index === rows.length - 1 ? 'border-b-0' : ''
                                }`}
                            >
                                <td className="px-[13px] py-7 text-[13px] text-grey-100 text-sm text-left flex items-center gap-2 font-medium">
                                    <div role="status" className="flex justify-start animate-pulse">
                                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-slate-700"></div>
                                    </div>
                                </td>
                                <td className="px-[13px] py-7 text-[13px] text-grey-100 text-sm text-left font-medium">
                                    <div role="status" className="flex justify-start animate-pulse">
                                        <div className="w-40 h-2 bg-gray-200 rounded-full dark:bg-slate-700"></div>
                                    </div>
                                </td>
                                <td className="px-[13px] py-7 text-sm">
                                    <div role="status" className="flex justify-center animate-pulse">
                                        <div className="w-16 h-2 bg-gray-200 rounded-full dark:bg-slate-700"></div>
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

export default AssetsListSkeleton;