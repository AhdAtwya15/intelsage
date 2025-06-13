import { useLocation, useNavigate, useParams } from "react-router-dom";
import UseAuthenticatedQuery from "../../Hooks/UseAuthenticatedQuery";
import { useEffect, useState } from "react";
import { IPagination,  ISummary } from "../../Interfaces";
import Topbar from "../../Components/Global/Topbar/Topbar";
import SummariesListTab from "../../Components/UI/Tabels/SummariesListTab";
import { MdOutlineArrowBackIos } from "react-icons/md";
// import SummariesListSkeleton from "../../Components/UI/Skeletons/SummariesListSkeleton";
import Paginator from "../../Components/UI/Paginator";
interface LocationState {
    from?: string;
}

const ScanName = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(8);
    const [expanded, setExpanded] = useState(false);

    const location = useLocation();

    const { scanId } = useParams();
    const navigate = useNavigate();

    const prevPage= () => {
        const state = location.state as LocationState; 
        const from = state?.from; 
        if (from === "scan") {
            navigate("/scan");
        } else if (from === "assets") {
            navigate("/assets");
        } else {
            navigate("/scan");
        }
    };

    const { data,isLoading} = UseAuthenticatedQuery({
        queryKey: ["scans", currentPage.toString(), pageSize.toString()], 
        url: `v1/scan/summaries/${scanId}?page=${currentPage}&pageSize=${pageSize}`, 
    });

    const summaries: ISummary[] = data?.data.summaries || [];
    const pagination: IPagination =
        data?.pagination || { currentPage: 1, pageSize: 8, totalCount: "0", totalPages: 1 };

    useEffect(() => {
            if (data?.pagination?.pageSize && data.pagination.pageSize !== pageSize) {
                setPageSize(data.pagination.pageSize);
            }
        }, [data, pageSize]);
    
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    


return (
    <div className="h-screen p-5 bg-primary-500 text-grey-100 font-roobert">
        <Topbar
        pageTitle="Scan Name"
        icon={<MdOutlineArrowBackIos />}
        prevBtn={prevPage}
        /> 

        <div className="h-[600px]">
            <SummariesListTab
                summaries={summaries}
                scanId={scanId!}
        />
        </div>
        {/* <div className="h-[600px]">
            {
            isLoading?
            <SummariesListSkeleton/>
            :(
                <SummariesListTab
                summaries={summaries}
                scanId={scanId!}
                />
            )
            }
        </div> */}
        
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

export default ScanName;