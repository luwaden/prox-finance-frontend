import React from "react";
import { Link } from "react-router-dom";
const DashboardBoxes = () => {
  return (
    <Link to={"expenses-details"} className='dashboard-container'>
      <div className='dashboard-box expenses-box'>
        <h2>Expenses</h2>
        <p>₦250,000</p>
        <span className='growth negative'>-5%</span>
      </div>
    </Link>
  );
};

export default DashboardBoxes;
