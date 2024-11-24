import React from "react";
// import { IncomeFormProps } from "./Component/Editfile/IncomeForm";
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
import EditIncome from "./Component/Editfile/IncomeForm";
import EditIncomeForm from "./Component/Dashboard/Income/EditIncomeForm";
import AddIncomeForm from "./Component/Dashboard/Income/AddIncomeForm";
import AddExpensesForm from "./Component/Dashboard/Expenses/AddExpensesForm";
import ExpenseTable from "./Component/Dashboard/Expenses/ExpenseTable";
import BudgetTable from "./Component/Dashboard/Budget/BudgetTable";
import AddBudgetForm from "./Component/Dashboard/Budget/AddBudgetForm";
import EditExpensesForm from "./Component/Dashboard/Expenses/EditExpensesForm";
import EditBudgetForm from "./Component/Dashboard/Budget/EditBudget";

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
        {
          path: "income-details",
          element: <IncomeTable />,
        },

        {
          path: "edit-income",
          element: <EditIncomeForm />,
        },

        {
          path: "add-income",
          element: <AddIncomeForm />,
        },

        {
          path: "expenses-details",
          element: <ExpenseTable />,
        },

        {
          path: "add-expense",
          element: <AddExpensesForm />,
        },

        {
          path: "edit-expense",
          element: <EditExpensesForm />,
        },

        {
          path: "budget-details",
          element: <BudgetTable />,
        },

        {
          path: "add-budget",
          element: <AddIncomeForm />,
        },

        {
          path: "edit-budget",
          element: <EditBudgetForm />,
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
