import Topbar from "../Topbar/Topbar";
import { useState } from "react";
import UseAuthenticatedQuery from "../../Hooks/UseAuthenticatedQuery";
import { IScanList } from "../../Interfaces";
import React from "react";
import ScanListTab from "../../Components/UI/ScansListTab";

import ScanListSkeleton from "../../Components/UI/ScanListSkeleton";

const itemsNumOfPage=10;
const Assets = () => {
    const [currentPage,setCurrentPage]=useState<number>(1);

    const{data,refetch,isFetching}=UseAuthenticatedQuery({
        queryKey:["scans"],
        url:'v1/scan/list',
        config:{
            headers:{
                "Content-Type": "application/json",
            },
        },
    });


    const scans:IScanList[]=data?.data||[];
    const totalItems = scans.length;
    const totalPages = Math.ceil(totalItems / itemsNumOfPage);
    const paginatedScans = scans.slice(
     (currentPage - 1) * itemsNumOfPage,
     currentPage * itemsNumOfPage
    ); 

    React.useEffect(()=>{
        refetch();
    },[refetch]);
    
    const handleRescan=(scanId:string)=>{
        console.log("rescan",scanId);
    }
    const handleDelete=(scanId:string)=>{
        console.log("delete",scanId);

    }

return (
    <div className="h-screen  p-8 bg-primary-500 text-grey-100 font-roobert">
        <Topbar pageTitle="Assets"/>
        {isFetching?(
            <ScanListSkeleton/>
        ):(
            <ScanListTab
                scans={paginatedScans}
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                onRescan={handleRescan}
                onDelete={handleDelete}/>
        )}


    </div>
    )
}

export default Assets