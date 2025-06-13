import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar/SideBar";

const Layout = () => {
  return (
    <div className="flex h-screen ">
        <Sidebar />
        <div className="flex-grow">
            <Outlet />
        </div>
    </div>
  )
}

export default Layout;