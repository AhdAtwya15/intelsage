import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import Scan from "../Pages/Scan/Scan";
import Assets from "../Pages/Assets/Assets";
import Layout from "../Components/Global/Layout/Layout";
import ProtectedRoute from '../Routes/ProtectedRoute';
import ScanName from "../Pages/ScanName/ScanName";
import ScanType from "../Pages/ScanType/ScanType";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";

const Router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      
      { path: "/", element: <ProtectedRoute><Dashboard /></ProtectedRoute> },
      { path: "/scan", element: <ProtectedRoute><Scan /></ProtectedRoute> },
      { path: "/assets", element: <ProtectedRoute><Assets/></ProtectedRoute> },
      { path:"/scanName/:scanId", element:<ProtectedRoute><ScanName/></ProtectedRoute>},
      { path:"/scanType/:scanId/:eventRes", element:<ProtectedRoute><ScanType/></ProtectedRoute>}
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "*", element: <NotFoundPage /> },
]);

export default Router;
