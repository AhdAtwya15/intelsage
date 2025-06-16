const DashboardSkeleton = () => {

return (
    <div className="h-screen p-5 bg-primary-500  transition-colors ">
        <div className="grid grid-cols-10 gap-6 pt-6">
            <div className="col-span-10 md:col-span-7 space-y-4">
                <div className="grid xl:grid-cols-4  md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
                    <div role="status" className="flex justify-start animate-pulse">
                        <div className="w-[195px] h-[100px] bg-gray-200 rounded-xl dark:bg-slate-700"></div>
                    </div>
                    <div role="status" className="flex justify-start animate-pulse">
                        <div className="w-[195px] h-[100px] bg-gray-200 rounded-xl dark:bg-slate-700"></div>
                    </div>
                    <div role="status" className="flex justify-start animate-pulse">
                        <div className="w-[195px] h-[100px] bg-gray-200 rounded-xl dark:bg-slate-700"></div>
                    </div>
                    <div role="status" className="flex justify-start animate-pulse">
                        <div className="w-[195px] h-[100px] bg-gray-200 rounded-xl dark:bg-slate-700"></div>
                    </div>
                </div>

            <div role="status" className="flex justify-start animate-pulse">
                <div className="w-[900px] h-[327px] bg-gray-200 rounded-xl dark:bg-slate-700"></div>
            </div>
        
            <div className=" rounded-xl">
                <div role="status" className="flex justify-start animate-pulse">
                    <div className="w-[900px] h-[200px] bg-gray-200 rounded-xl dark:bg-slate-700"></div>
                </div>
            </div>
        </div>

        <div className="col-span-10 md:col-span-3  space-y-4">
        <div className="  rounded-2xl  ">
            <div role="status" className="flex justify-start animate-pulse">
                <div className="w-[328px] h-[350px] bg-gray-200 rounded-xl dark:bg-slate-700"></div>
            </div>
        </div>

            <div className=" min-h-[400px] overflow-y-auto">
                <div role="status" className="flex justify-start animate-pulse">
                    <div className="w-[328px] h-[300px] bg-gray-200 rounded-xl dark:bg-slate-700"></div>
                </div>
            </div>
        </div>
    </div>
</div>
);
};


export default DashboardSkeleton;
