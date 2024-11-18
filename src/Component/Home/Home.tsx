import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import "./home.css";
import DashboardHeader from "../Dashboard/DBHeader/DBHeader";

const Home = () => {
  return (
    <div className='main'>
      <Sidebar />
      <div className='homebody'>
        <DashboardHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
