import React from "react";
import DashboardHeader from "./DBHeader/DBHeader";
import Expenses from "./Expenses/Expenses";
import Income from "./Income/Income";
import Budget from "./Budget/Budget";
import "./Dashboard.css";
import Balance from "./Balance/Balance";
import AddIncome from "./Income/AddIncome";
import AddBudget from "./Budget/AddBudget";
import AddExpenses from "./Expenses/AddExpense";
import ChartIncome from "./Income/ChartIncome";
import ChartBudget from "./Budget/ChartBudget";
import ChartExpenses from "./Expenses/ChartExpenses";

const Dashboard = () => {
  return (
    <div className='main-dashboard'>
      <div className='balance'>
        <Balance />
      </div>
      <div className='account-overview'>
        <Income />
        <Budget />
        <Expenses />
      </div>
      <div className='add-container'>
        <AddIncome />
        <AddBudget />
        <AddExpenses />
      </div>
      <div className='chart-box'>
        <ChartIncome />
        <ChartBudget />
        <ChartExpenses />
      </div>
    </div>
  );
};

export default Dashboard;
