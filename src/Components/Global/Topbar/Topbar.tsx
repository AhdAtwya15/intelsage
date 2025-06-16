import { ReactNode } from "react";

interface IProps{
  pageTitle:string;
  icon?:ReactNode;
  secondTitle?:string;
  thirdTitle?:string
  prevBtn?:()=>void;
}
export default function Topbar({pageTitle,secondTitle,thirdTitle,icon,prevBtn}:IProps) {

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
    </div>
  );
}
