import { RiBuilding4Line } from "react-icons/ri";
import { HiViewGrid } from "react-icons/hi";
import { AiOutlineScan } from "react-icons/ai";
import { useContext, useState } from "react";
import { ColorModeContext } from "../../../theme";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { LuSunDim } from "react-icons/lu";
import { useTheme } from "@mui/material/styles";
import { IoClose, IoMenu } from "react-icons/io5";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { useUser } from '../../../context/UserContext';

interface LocationState {
  from?: string;
}

const Sidebar = () => {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);
  const [isDark, setIsDark] = useState(theme.palette.mode === "dark");
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); 
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  const handleToggleTheme = () => {
    setIsDark(!isDark);
    toggleColorMode();
  };

  const state = location.state as LocationState;
  const from = state?.from;
  const pathname = location.pathname;

  const isAssetsActive =
    pathname === "/assets" ||
    (pathname.startsWith("/scanName") && from === "assets") ||
    (pathname.startsWith("/scanType") && from === "assets");

  const isScanActive =
    pathname === "/scan" ||
    (pathname.startsWith("/scanName") && from === "scan") ||
    (pathname.startsWith("/scanType") && from === "scan");

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 block md:hidden bg-gray-100 dark:bg-gray-800 p-2 rounded-full shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <IoMenu size={24} className="text-gray-800 dark:text-white" />
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-20 md:w-20 flex flex-col items-center py-4 transition-transform transform
          bg-primary-400 z-50 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
      >
        <button
          className="absolute top-4 right-4 z-50 block md:hidden bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-lg"
          onClick={() => setIsOpen(false)}
        >
          <IoClose size={24} className="text-gray-800 dark:text-white" />
        </button>

        <ul className="flex flex-col gap-8 flex-grow justify-center">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flex items-center justify-center rounded-full p-2  duration-300 hover:bg-gray-100 hover:dark:bg-slate-700 hover:text-black hover:dark:text-white ${
                  isActive ?
                  "bg-gray-100 dark:bg-slate-700 text-black dark:text-white"
                  : "text-[#888888]"
                }`
              }
            >
              <HiViewGrid size={28} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/assets"
              className={
                isAssetsActive ?
                  "flex items-center justify-center rounded-full p-2 bg-gray-100 dark:bg-slate-700 text-black dark:text-white"
                  : "flex items-center justify-center rounded-full p-2 text-[#888888]  duration-300 hover:bg-gray-100 hover:dark:bg-slate-700 hover:text-black hover:dark:text-white"}
            >
              <RiBuilding4Line size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/scan"           
              className={
                isScanActive ?
                  "flex items-center justify-center rounded-full p-2 bg-gray-100 dark:bg-slate-700 text-black dark:text-white"
                  : "flex items-center justify-center rounded-full p-2 text-[#888888]  duration-300 hover:bg-gray-100 hover:dark:bg-slate-700 hover:text-black hover:dark:text-white"}
            >
              <AiOutlineScan size={25} />
            </NavLink>
          </li>
        </ul>

        <div
          className="mb-4 relative w-[28px] h-[53px] bg-gray-200 dark:bg-gray-700 rounded-full flex items-center transition-all cursor-pointer overflow-hidden"
          onClick={handleToggleTheme}
        >
          <div
            className="absolute left-1 w-[18px] h-[18px] bg-white dark:bg-gray-300 rounded-full flex items-center justify-center transition-all"
            style={{ top: isDark ? "6px" : "30px" }}
          >
            {isDark ? (
              <DarkModeIcon sx={{ fontSize: "16px", color: "#171717" }} />
            ) : (
              <LuSunDim className="text-black text-[16px]" />
            )}
          </div>
        </div>
        <button
          onClick={handleLogout}
         
          className="flex flex-col items-center justify-center  p-2  hover:text-red-500 transition-colors mt-auto mb-4"
        >
          <LogoutIcon sx={{ color: '', fontSize: 24 }} />
          <span className="text-xs  mt-1 font-bold"></span>
        </button>
      </div>

      <div className="md:pl-20"></div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40 md:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
