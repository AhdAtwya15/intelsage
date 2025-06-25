import { useNavigate, useParams } from "react-router-dom";
import UseAuthenticatedQuery from "../../Hooks/UseAuthenticatedQuery";
import { useState } from "react";
import {  IPagination, ISummaryThraet } from "../../Interfaces";
import { MdOutlineArrowBackIos } from "react-icons/md";
import SummaryCard from "../../Components/UI/SummaryCard";
import Topbar from "../../Components/Global/Topbar/Topbar";
import Paginator from "../../Components/UI/Paginator";

const SummaryThreat = () => {
     const [currentPage, setCurrentPage] = useState<number>(1);

        const [expanded, setExpanded] = useState(false);
        const navigate = useNavigate();
    const prevPage= () => {
        navigate("/threat")
    };

    const { scanId } = useParams();
    const { data,isLoading } = UseAuthenticatedQuery({
        queryKey: ["findings", currentPage.toString()], 
        url: `v1/threat-intelligence/${scanId}/findings?page=${currentPage}&pageSize=3`
    });
  


    const summaryThreat: ISummaryThraet= data?.data;
    const pagination: IPagination =
        data?.data?.pagination || { currentPage: 1, pageSize: 3, totalCount: "0", totalPages: 1 };
         const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
  return (
    <div className="h-screen p-5 bg-primary-500 text-grey-100 font-roobert">
          <Topbar 
          pageTitle="Threat Intelligence"
          secondTitle="Scan Name"
          icon={<MdOutlineArrowBackIos />}
          prevBtn={prevPage}
          />
          <div className="flex flex-col gap-6 px-6 py-4  min-h-screen">
    <SummaryCard
      averageRiskScore={summaryThreat?.averageRiskScore || 0}
      findingsSummary={summaryThreat?.findingsSummary || {
        CRITICAL: 0,
        HIGH: 0,
        MEDIUM: 0,
        LOW: 0,
        INFO: 0,
      }}
      findings={summaryThreat?.findings || []}
    />
  </div>
  {!isLoading && (
        <Paginator
        totalPages={pagination.totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        expanded={expanded} 
        setExpanded={setExpanded} 
        />
        )}


          
          
    </div>
  )
}

export default SummaryThreat