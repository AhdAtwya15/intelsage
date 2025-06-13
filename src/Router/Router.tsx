import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import Scan from "../Pages/Scan/Scan";
import Assets from "../Pages/Assets/Assets";
import Layout from "../Components/Global/Layout/Layout";

import ScanName from "../Pages/ScanName/ScanName";
import ScanType from "../Pages/ScanType/ScanType";

const Router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      
      { path: "/", element: <Dashboard /> },
      { path: "/scan", element: <Scan /> },
      { path: "/assets", element: <Assets/> },
      { path:"/scanName/:scanId", element:<ScanName/>},
      { path:"/scanType/:scanId/:eventRes", element:<ScanType/>}
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default Router;
