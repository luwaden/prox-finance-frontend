import React from "react";
import { IncomeFormProps } from "./Component/Editfile/EditIncome";
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
import IncomeTable from "./Component/Dashboard/Income/incomeTable";
import EditIncome from "./Component/Editfile/EditIncome";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <AuthPage />,
    },

    {
      path: "/income-details",
      element: <IncomeTable />,
    },

    {
      path: "/edit-income",
      element: <EditIncome />,
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
