import { RiBuilding4Line } from "react-icons/ri";
import { HiViewGrid } from "react-icons/hi";
import { AiOutlineScan } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { ColorModeContext } from "../../../theme";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { LuSunDim } from "react-icons/lu";
import { useTheme } from "@mui/material/styles";
import { IoClose, IoMenu } from "react-icons/io5";

interface SidebarIconProps {
  icon: React.ReactNode;
}

const Sidebar = () => {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);
  const [isDark, setIsDark] = useState(theme.palette.mode === "dark");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleTheme = () => {
    setIsDark(!isDark);
    toggleColorMode();
  };

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 block md:hidden bg-gray-100 dark:bg-gray-800 p-2 rounded-full shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <IoMenu size={24} className="text-gray-800 dark:text-white" />
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-20 md:w-20 flex flex-col items-center py-4  transition-transform transform
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

        <div className="flex flex-col gap-8 flex-grow justify-center">
          <SidebarIcon
            icon={
              <HiViewGrid
                size={40}
                className="rounded-full p-2 bg-gray-100 dark:bg-slate-700"
              />
            }
          />
          <SidebarIcon
            icon={<RiBuilding4Line size="16" className="icon-color" />}
          />
          <SidebarIcon
            icon={<AiOutlineScan size="16" className="icon-color" />}
          />
          <SidebarIcon
            icon={<IoSettingsOutline size="16" className="icon-color" />}
          />
        </div>

        <div
          className="mb-4 relative w-[28px] h-[53px] bg-gray-200 dark:bg-gray-700 rounded-full flex items-center transition-all cursor-pointer overflow-hidden"
          onClick={handleToggleTheme}
        >
          <div
            className="absolute left-1 w-[18px] h-[18px] bg-white dark:bg-gray-300 rounded-full flex items-center justify-center transition-all "
            style={{ top: isDark ? "6px" : "30px" }}
          >
            {isDark ? (
              <DarkModeIcon sx={{ fontSize: "16px", color: "#171717" }} />
            ) : (
              <LuSunDim className="text-black text-[16px]" />
            )}
          </div>
        </div>
      </div>

      <div className="md:pl-20"></div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40 md:hidden transition-opacity "
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

const SidebarIcon = ({ icon }:  SidebarIconProps) => (
  <div className="group relative flex items-center justify-center w-full cursor-pointer text-black dark:text-white">
    {icon}
  </div>
);

export default Sidebar;
