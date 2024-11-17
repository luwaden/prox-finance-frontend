import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <div className='homebody'>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
