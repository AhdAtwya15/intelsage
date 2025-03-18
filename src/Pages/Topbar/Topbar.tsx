import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";

export default function Topbar() {
  return (
    <div className="font-roobert flex flex-col items-center justify-between md:flex-row gap-3">
      <div>
        <span className=" dark:text-white font-roobert font-medium  text-lg  ">
          Main Dashboard
        </span>
      </div>
      <div className="flex justify-between">
        <div className="relative w-[360px]">
          <input
            type="search"
            className="block  w-full p-2 shadow-md text-sm icon-color fw border-slate-200 dark:bg-cardDark dark:border-none rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search"
            required
          />
          <div className="absolute inset-y-0 right-2 flex items-center">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-transparent ">
              <IoSearchOutline
                size={18}
                className="text-black  dark:text-white cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className=" ms-3 border-x-gray-100 shadow-md relative w-8 h-8 flex items-center justify-center rounded-full main-color cursor-pointer dark:bg-cardDark dark:text-white">
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>

          <IoNotificationsOutline
            size={20}
            className="text-color dark:text-white "
          />
        </div>
      </div>
    </div>
  );
}
