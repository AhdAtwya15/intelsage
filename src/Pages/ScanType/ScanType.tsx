import { useLocation, useNavigate, useParams } from "react-router-dom";
import UseAuthenticatedQuery from "../../Hooks/UseAuthenticatedQuery";
import { useEffect, useState } from "react";
import { IEventResult, IPagination } from "../../Interfaces";
import Topbar from "../../Components/Global/Topbar/Topbar";
import { MdOutlineArrowBackIos } from "react-icons/md";
import EventResultTab from "../../Components/UI/Tabels/EventResultTab";
import EventResultSkeleton from "../../Components/UI/Skeletons/EventResultSkeleton";
import Paginator from "../../Components/UI/Paginator";

interface LocationState {
    from?: string;
}
const ScanType = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(8);
    const [expanded, setExpanded] = useState(false);
    const location = useLocation();

    const { scanId,eventRes } = useParams();
    const navigate = useNavigate();
    const state = location.state as { typeName?: string };

    const prevScanNamePage= () => {
        const state = location.state as LocationState;
        navigate(`/scanName/${scanId}`, { state }); 
    };

    const { data,isLoading } = UseAuthenticatedQuery({
        queryKey: ["eventResults", currentPage.toString(), pageSize.toString()], 
        url: `v1/scan/event-results/${scanId}/${eventRes}?page=${currentPage}&pageSize=${pageSize}`
    });

    const eventResult: IEventResult[] = data?.data.eventResults || [];
    const pagination: IPagination =
        data?.data?.pagination || { currentPage: 1, pageSize: 8, totalCount: "0", totalPages: 1 };


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
        pageTitle="Scan Name"
        secondTitle="Scan Type"
        thirdTitle={state.typeName}
        icon={<MdOutlineArrowBackIos />}
        prevBtn={prevScanNamePage}
        /> 
        
    

        <div className="h-[600px]">
            {
            isLoading?
            <EventResultSkeleton/>
            :
            <EventResultTab
            eventResult={eventResult}
            
            />
            }
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

export default ScanType;