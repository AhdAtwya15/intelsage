const ScanListSkeleton = () => {
    const rows = Array.from({ length: 5 });
return (
    <div className="mt-3">
            <div className="overflow-x-auto bg-primary-400 border border-[#ececece1] dark:border-transparent rounded-[14px] pt-[14px] px-4 pb-2">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-primary-100 text-grey-100 rounded-t-lg font-medium text-sm text-center">
                            <th className="px-4 py-3 rounded-l-lg">Name</th>
                            <th className="px-4 py-3">Target</th>
                            <th className="px-4 py-3">Started</th>
                            <th className="px-4 py-3">Finished</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Elements Found</th>
                            <th className="px-4 py-3 rounded-r-lg">Action</th>
                        </tr>
                    </thead>
                    <tbody  >
                        <tr>
                            <td colSpan={7} className="py-2"></td>
                        </tr>
                        {rows.map((_,index) => (
                            
                            <tr 
                                key={index}
                                
                                className={` text-center text-sm text-grey-100 font-medium border-b border-[#F3F3F3] dark:border-transparent hover:bg-primary-200 transition-colors duration-200  hover:cursor-pointer hover:border-transparent 
                                ${
                                    index === rows.length - 1 ? 'border-b-0' : ''
                                }
                                `
                            }
                            
                            >
                                <td className="px-4 py-4 rounded-l-2xl">
                                    <div role="status" className=" p-3   divide-gray-200 animate-pulse dark:divide-gray-700  ">             
                                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-slate-700"></div>
                                    </div>
                                </td>
                                <td className="px-4 py-4">
                                    <div role="status" className=" p-3   divide-gray-200 animate-pulse dark:divide-gray-700  ">             
                                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-slate-700"></div>
                                    </div>
                                </td>
                                <td className="px-4 py-4">
                                    <div role="status" className=" p-3   divide-gray-200 animate-pulse dark:divide-gray-700  ">             
                                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-slate-700"></div>
                                    </div>
                                </td>
                                <td className="px-4 py-4">
                                    <div role="status" className=" p-3   divide-gray-200 animate-pulse dark:divide-gray-700  ">             
                                        <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-slate-700"></div>
                                    </div>
                                </td>
                                <td className="px-4 py-4">
                                    <div role="status" className=" p-3   divide-gray-200 animate-pulse dark:divide-gray-700  ">             
                                        <div className="w-20 h-2 bg-gray-200 rounded-full dark:bg-slate-700"></div>
                                    </div>
                                </td>
                                <td className="px-4 py-4">
                                    <div role="status" className=" p-3   divide-gray-200 animate-pulse dark:divide-gray-700  ">             
                                        <div className="w-10 h-2 bg-gray-200 rounded-full dark:bg-slate-700"></div>
                                    </div>
                                </td>
                                <td className="px-4 py-4 rounded-r-2xl">
                                    <div className="flex gap-2 justify-center">
                                        <div role="status" className=" p-1   divide-gray-200 animate-pulse dark:divide-gray-700  ">             
                                            <div className="px-10 py-4 rounded-md bg-gray-200 dark:bg-slate-700"></div>
                                        </div>                      
                                        <div role="status" className=" p-1   divide-gray-200 animate-pulse dark:divide-gray-700  ">             
                                            <div className="px-4 py-4 bg-gray-200 rounded-md dark:bg-slate-700"></div>
                                        </div>                      
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </div>
)
}

export default ScanListSkeleton;