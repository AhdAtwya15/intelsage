const ScanListSkeleton = () => {
    const rows = Array.from({ length: 14 }); 

    return (
    <div className="mt-5">
        <div className="overflow-x-auto border  border-[#ececece1] dark:border-none rounded-lg">
            <table className="min-w-full border-collapse   ">
                <thead>
                    <tr className="bg-primary-300 ">
                        <th className="px-4 py-[8px] text-sm font-normal flex pl-20">Assets Name</th>
                        <th className="px-4 py-[8px] text-sm font-normal">Status</th>
                        <th className="px-4 py-[8px] text-sm font-normal flex justify-end pr-28">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((_,index)=>(
                        <tr
                        key={index}
                            className={
                                `${index % 2 === 0 ? "bg-primary-400":"bg-primary-300"}`
                            }
                        >
                            <td className="pl-14 py-[5px]">
                                <div role="status" className=" p-3   divide-gray-200 rounded-sm shadow-sm animate-pulse dark:divide-gray-700  ">             
                                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-slate-700"></div>
                                </div>
                            </td>
                            <td className="px-4 py-[5px]">
                                <span className={
                                    `flex justify-center items-center text-sm 
                                    `}
                                    >
                                    <div role="status" className=" p-3   divide-gray-200 rounded-sm shadow-sm animate-pulse dark:divide-gray-700  ">             
                                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-slate-700"></div>
                                    </div>
                                </span>
                            </td>
                            <td className="px-4 py-[5px] flex justify-end pr-14  gap-3">
                                <div role="status" className=" p-1   divide-gray-200 rounded-sm shadow-sm animate-pulse dark:divide-gray-700  ">             
                                    <div className="px-10 py-3 rounded-md bg-gray-200 dark:bg-slate-700"></div>
                                </div>                      
                                <div role="status" className=" p-1   divide-gray-200 rounded-sm shadow-sm animate-pulse dark:divide-gray-700  ">             
                                    <div className="px-4 py-3 bg-gray-200 rounded-md dark:bg-slate-700"></div>
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

export default ScanListSkeleton;
