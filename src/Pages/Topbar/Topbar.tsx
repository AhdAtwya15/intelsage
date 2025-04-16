import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";

interface IProps{
  pageTitle:string;
}
export default function Topbar({pageTitle}:IProps) {
  return (
    <div className="font-roobert flex flex-col items-center justify-between md:flex-row gap-3">
      <div>
        <span className="  font-roobert font-medium  text-lg  ">
          {pageTitle}
        </span>
      </div>
      <div className="flex justify-between">
        <div className="relative w-[360px] ">
          <input
            type="search"
            className="block  w-full p-2  text-sm text-grey-600 dark:text-grey-100 font-medium border-[1px] border-[#ececece1] dark:border-none bg-primary-400  rounded-lg  focus:ring-blue-500 focus:border-blue-500"
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

        <div className=" ms-3 border-x-gray-100 shadow-md relative w-8 h-8 flex items-center justify-center rounded-full cursor-pointer bg-primary-400">
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>

          <IoNotificationsOutline
            size={20}
            className="text-grey-100 "
          />
        </div>
      </div>
    </div>
  );
}
