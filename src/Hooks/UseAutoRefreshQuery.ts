import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../Config/axios.config";
import { AxiosRequestConfig } from "axios";

interface IAuthenticatedQuery {
    queryKey: string[];
    url: string;
    config?: AxiosRequestConfig; 
}
const UseAutoRefreshQuery = ({ queryKey, url, config }: IAuthenticatedQuery) => {
    return useQuery({
        queryKey,
            queryFn: async () => {
            const response = await axiosInstance.get(url, config);
            return response.data;
            },
        refetchInterval: 10000, 
    });
};
export default UseAutoRefreshQuery;
