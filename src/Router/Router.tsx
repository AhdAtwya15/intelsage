import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login/Login";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

export default Router;
