import React from "react";
const DashboardBoxes = () => {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-box income-box'>
        <h2>Income</h2>
        <p>₦250,000</p>
        <span className='growth positive'>+5%</span>
      </div>
    </div>
  );
};

export default DashboardBoxes;
