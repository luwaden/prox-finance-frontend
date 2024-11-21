import React from "react";

const Budget = () => {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-box budget-box'>
        <h2>Budget</h2>
        <p>₦250,000</p>
        <span className='growth budget'>-5%</span>
      </div>
    </div>
  );
};

export default Budget;
