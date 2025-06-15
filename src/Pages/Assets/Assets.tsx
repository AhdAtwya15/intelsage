import Topbar from "../../Components/Global/Topbar/Topbar";
import React from 'react';
import { useUser } from '../../context/UserContext';
import { useEffect, useState } from "react";
import UseAuthenticatedQuery from "../../Hooks/UseAuthenticatedQuery";
import { IAssetsList, IPagination } from "../../Interfaces";
import AssetsListTab from "../../Components/UI/Tabels/AssetsListTab";
import AssetsListSkeleton from "../../Components/UI/Skeletons/AssetsListSkeleton";
import Paginator from "../../Components/UI/Paginator";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Assets = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(6);
  const [expanded, setExpanded] = useState(false);

  // مثال: بيانات افتراضية لو اليوزر مش موجود
  React.useEffect(() => {
    if (!user) {
      setUser({
        id: '1',
        name: 'Ahmed Ali',
        email: 'ahmed@example.com',
        role: 'admin',
      });
    }
  }, [user, setUser]);

  const { data, isLoading } = UseAuthenticatedQuery({
    queryKey: ["scans", currentPage.toString(), pageSize.toString()],
    url: `v1/scan/assets?page=${currentPage}&pageSize=${pageSize}`
  });

    const assets: IAssetsList[] = data?.data.assets || [];
    const pagination: IPagination =
    data?.data.pagination || { currentPage: 1, pageSize: 6, totalCount: "0", totalPages: 1 };

    useEffect(() => {
    if (data?.data.pagination?.pageSize && data.data.pagination.pageSize !== pageSize) {
        setPageSize(data.data.pagination.pageSize);
        }
    }, [data, pageSize]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

return (
    <div className="h-screen py-5 px-4 bg-primary-500 text-grey-100 font-roobert">
        <Topbar
        icon={<MdOutlineArrowBackIos />}
        prevBtn={() => navigate("/")}
        pageTitle="Assets" />
            <div className="h-[575px]">
                {isLoading ? (
                <AssetsListSkeleton />
                ) : (
                <AssetsListTab assets={assets} />
                )}
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
    );
};

export default Assets;