import React from "react";
import { Link } from "react-router-dom";
const DashboardBoxes = () => {
  return (
    <Link to={"budget-details"} className='dashboard-container'>
      <div className='dashboard-box budget-box'>
        <h2>Budget</h2>
        <p>₦250,000</p>
        <span className='growth budget'>-5%</span>
      </div>
    </Link>
  );
};

export default DashboardBoxes;
