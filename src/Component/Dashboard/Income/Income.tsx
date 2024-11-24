import React from "react";
import { Link } from "react-router-dom";

const DashboardBoxes = () => {
  return (
    <Link to={"income-details"} className='dashboard-container'>
      <div className='dashboard-box income-box'>
        <h2>Income</h2>
        <p>₦250,000</p>
        <span className='growth positive'>+5%</span>
      </div>
    </Link>
  );
};

export default DashboardBoxes;
