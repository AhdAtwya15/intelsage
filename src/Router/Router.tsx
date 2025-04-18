import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";
import Scan from "../Pages/Scan/Scan";
import Assets from "../Pages/Assets/Assets";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/login", element: <Login /> },
      { path: "/scan", element: <Scan /> },
      { path: "/assets", element: <Assets/> },
    ],
  },
]);

export default Router;
