import { useNavigate } from "react-router-dom";
import { IScanList } from "../../../Interfaces";
import Button from "../Button";
import { GoTrash } from "react-icons/go";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../../Config/axios.config";
import { useState } from "react";
import toast from "react-hot-toast";

interface IProps {
    scans: IScanList[];
}

const ScanListTab = ({ scans }: IProps) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [activeRescanId, setActiveRescanId] = useState<string | null>(null);
    const [scanToDelete, setScanToDelete] = useState<IScanList | null>(null);

    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const rescanMutation = useMutation({
        mutationFn: async (scanId: string) => {
            const res = await axiosInstance.post(`/v1/scan/rescan/${scanId}`, {}, { timeout: 15000 });
            return res.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["scans"] });
        },
        onError: (error) => {
            console.error("Error starting scan:", error);
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async (scanData: IScanList) => {
            const res = await axiosInstance.delete(`/v1/scan/delete/${scanData.id}`);
            console.log("delete",scanData.id);
            console.log("delete",scanData.name);
            return res.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["scans"] });
            toast.success("Scan deleted successfully");
            
        },
        onError: (error) => {
            console.error("Error deleting scan:", error);
            toast.error("Failed to delete scan");
        },
    });

    const handleScanClick = (scan: IScanList) => {
        if (scan.status === "STARTING") {
            toast.error("Scan is still in progress.Please wait until it finishes.");
            return;
        }
        navigate(`/scanName/${scan.id}`, { state: { from: "scan" } });
    };

    const handleRescan = (scan: IScanList) => {
        setActiveRescanId(scan.id);
        if (scan.status !== "FINISHED") {
            toast.error("Scan is still in progress.Please wait until it finishes.");
            return;
        }
        rescanMutation.mutate(scan.id, {
            onSettled: () => {
                setActiveRescanId(null);
            },
        });
    };

    const handleDelete = () => {
        if (!scanToDelete) return;
        deleteMutation.mutate(scanToDelete);
        setIsModalOpen(false);
        setScanToDelete(null);
    };

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
                    <tbody>
                        <tr>
                            <td colSpan={7} className="py-2"></td>
                        </tr>
                        {scans.map((scan, index) => (
                            <tr
                                key={scan.id}
                                onClick={() => handleScanClick(scan)}
                                className={`text-center text-sm text-grey-100 font-medium border-b border-[#F3F3F3] dark:border-transparent hover:bg-primary-200 transition-colors duration-200 hover:cursor-pointer ${
                                    index === scans.length - 1 ? "border-b-0" : ""
                                }`}
                            >
                                <td className="px-4 py-5 rounded-l-2xl">{scan.name}</td>
                                <td className="px-4 py-5">{scan.target}</td>
                                <td className="px-4 py-5">{scan.startDate}</td>
                                <td className="px-4 py-5">{scan.endDate}</td>
                                <td className="px-4 py-5">
                                    <span
                                        className={`flex justify-center items-center ${
                                            scan.status === "RUNNING"
                                                ? "text-[#6366F1]"
                                                : scan.status === "FINISHED"
                                                ? "text-[#01B433]"
                                                : "text-[#BC9E00]"
                                        }`}
                                    >
                                        {scan.status}
                                    </span>
                                </td>
                                <td className="px-4 py-5">{scan.elementsFound}</td>
                                <td className="px-4 py-5 rounded-r-2xl">
                                    <div className="flex gap-2 justify-center">
                                        <Button
                                            type="button"
                                            variant="rescan"
                                            size="md"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleRescan(scan);
                                            }}
                                            isLoading={activeRescanId === scan.id && rescanMutation.status === "pending"}
                                        >
                                            {activeRescanId === scan.id && rescanMutation.status === "pending"
                                                ? "Rescan.."
                                                : "Rescan"}
                                        </Button>
                                        <button
                                            className="px-2 py-[4px] bg-[#FFF4F4] hover:bg-[#FF0000] text-[#FF0000] hover:text-[#FFF4F4] rounded-[4px]"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setScanToDelete(scan);
                                                setIsModalOpen(true);
                                            }}
                                        >
                                            <GoTrash className="text-xl" />
                                        </button>

                                        {isModalOpen && (
                                            <div
                                                className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-15"
                                                onClick={(e) => {
                                                    if (e.target === e.currentTarget) {
                                                        e.stopPropagation();
                                                        setIsModalOpen(false);
                                                        setScanToDelete(null);
                                                    }
                                                }}
                                            >
                                                <div className="relative p-4 w-full max-w-md">
                                                    <div className="bg-primary-200 rounded-lg shadow-sm relative">
                                                        <button
                                                            type="button"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setIsModalOpen(false);
                                                                setScanToDelete(null);
                                                            }}
                                                            className="absolute top-3 right-2.5 text-grey-100 hover:bg-gray-200 dark:hover:bg-primary-500 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                                                        >
                                                            <svg
                                                                className="w-3 h-3"
                                                                aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 14 14"
                                                            >
                                                                <path
                                                                    stroke="currentColor"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                                />
                                                            </svg>
                                                            <span className="sr-only">Close modal</span>
                                                        </button>
                                                        <div className="p-5 text-center">
                                                            <svg
                                                                className="mx-auto mb-4 text-gray-400 w-12 h-12"
                                                                aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path
                                                                    stroke="currentColor"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                                />
                                                            </svg>
                                                            <h3 className="mb-5 text-lg font-normal text-grey-100">
                                                                Are you sure you want to delete this Scan?
                                                            </h3>
                                                            <div className="flex justify-center gap-1">
                                                                <Button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        handleDelete();
                                                                    }}
                                                                    type="button"
                                                                    variant="danger"
                                                                    size="md"
                                                                    className="py-2.5 px-7 ml-3"
                                                                >
                                                                    Yes
                                                                </Button>
                                                                <Button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        setIsModalOpen(false);
                                                                        setScanToDelete(null);
                                                                    }}
                                                                    type="button"
                                                                    size="md"
                                                                    className="py-2.5 px-5 ml-3"
                                                                >
                                                                    Cancel
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
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

export default ScanListTab;


