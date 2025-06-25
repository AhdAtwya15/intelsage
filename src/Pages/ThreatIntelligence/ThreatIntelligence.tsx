import { useNavigate } from "react-router-dom";
import Topbar from "../../Components/Global/Topbar/Topbar"
import { MdOutlineArrowBackIos } from "react-icons/md";
import UseAuthenticatedQuery from "../../Hooks/UseAuthenticatedQuery";
import { useEffect, useState } from "react";
import { IAllThreat, IPagination } from "../../Interfaces";
import ThreatElement from "../../Components/UI/ThreatElement";
import Paginator from "../../Components/UI/Paginator";


const ThreatIntelligence = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
      const [pageSize, setPageSize] = useState<number>(6);
      const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
    const prevPage= () => {
        navigate("/")
    };

    const { data ,isLoading} = UseAuthenticatedQuery({
        queryKey: ["allThreat", currentPage.toString(), pageSize.toString()], 
        url: `v1/threat-intelligence?page=${currentPage}&pageSize=${pageSize}`
    });
     const allThreat: IAllThreat[] = data?.data.threatIntelligence || [];
     const pagination: IPagination =
       data?.data?.pagination || { currentPage: 1, pageSize: 6, totalCount: "0", totalPages: 1 };
        useEffect(() => {
                   if (data?.data?.pagination?.pageSize && data.data.pagination.pageSize !== pageSize) {
                       setPageSize(data.data.pagination.pageSize);
                       }
               }, [data, pageSize]);

     const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    
  return (
    <div className="h-screen p-5 bg-primary-500 text-grey-100 font-roobert">
      <Topbar 
      pageTitle="Threat Intelligence"
      icon={<MdOutlineArrowBackIos />}
      prevBtn={prevPage}
      />
      <div className="grid grid-cols-3 gap-3 py-6 px-2">
  {allThreat.map((threat) => (
    <ThreatElement key={threat.id} allThreat={threat} />
  ))}
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

export default ThreatIntelligence