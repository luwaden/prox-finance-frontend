import React from "react";

const ChartIncome = () => {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-box expenses-box'>
        <h2>Chart Income</h2>
        <img src='src/Component/utils/img/chart-pics.png' alt='' />
        <span className='growth negative'>-5%</span>
      </div>
    </div>
  );
};

export default ChartIncome;
