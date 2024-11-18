import React from "react";

const DashboardBoxes = () => {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-box expenses-box'>
        <h2>Expenses</h2>
        <p>₦250,000</p>
        <span className='growth negative'>-5%</span>
      </div>
    </div>
  );
};

export default DashboardBoxes;
