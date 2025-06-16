import { ReactNode } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

interface IProps{
  pageTitle:string;
  icon?:ReactNode;
  secondTitle?:string;
  thirdTitle?:string
  prevBtn?:()=>void;
}
export default function Topbar({pageTitle,secondTitle,thirdTitle,icon,prevBtn}:IProps) {
  const location = useLocation();
  const isScanPage = location.pathname === "/scan";
  return (
    <div className="font-roobert flex flex-col items-center justify-between md:flex-row gap-3">
      {icon?
          <div className="flex gap-4">
            <button className="text-[#717171] text-xl mt-[3px]" onClick={prevBtn}>
              {icon}
            </button>
            <span className="font-roobert font-medium text-lg">
              {thirdTitle ? (
              <>
                <span className="text-[#8E8E8E]">{pageTitle} / {secondTitle} / </span>
                <span className="text-grey-100">{thirdTitle}</span>
              </>
              ) : secondTitle ? (
              <>
                <span className="text-[#8E8E8E]">{pageTitle} / </span>
                <span className="text-grey-100">{secondTitle}</span>
              </>
              )
              :
              (
                <span className="text-grey-100">{pageTitle}</span>
              )}
          </span>
          </div>
          :<div>
            <span className="  font-roobert font-medium  text-lg  ">
              {pageTitle}
            </span>
          </div>
      }
      <div className="flex justify-between">
        {isScanPage && (
          <div className="relative w-[360px] ">
            <input
              type="search"
              className="block  w-full p-2  text-sm text-grey-600 dark:text-grey-100 font-medium border-[1px] border-[#ececece1] dark:border-none bg-primary-400  rounded-lg  focus:ring-gray-400  "
              placeholder="Search"
              required
            />
            <div className="absolute inset-y-0 right-2 flex items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-[#001539] ">
                <IoSearchOutline
                  size={18}
                  className="text-grey-100 cursor-pointer"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
