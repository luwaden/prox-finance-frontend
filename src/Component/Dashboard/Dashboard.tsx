import React from "react";
import DashboardHeader from "./DBHeader/DBHeader";
import Expenses from "./Expenses/Expenses";
import Income from "./Income/Income";
import Budget from "./Budget/Budget";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className='main-dashboard'>
      {/* <DashboardHeader /> */}
      <Expenses />
      <Income />
      <Budget />
    </div>
  );
};

export default Dashboard;
