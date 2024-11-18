import React from "react";

import Sidebar from "./Component/Sidebar/Sidebar";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import AuthPage from "./Component/auth/authPage";
import Home from "./Component/Home/Home";
import Dashboard from "./Component/Dashboard/Dashboard";
import DashboardHeader from "./Component/Dashboard/DBHeader/DBHeader";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <AuthPage />,
    },

    {
      path: "/",
      element: <Home />,

      children: [
        {
          path: "",
          element: <Dashboard />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      {/* <Dashboard /> */}
    </>
  );
};

export default App;
