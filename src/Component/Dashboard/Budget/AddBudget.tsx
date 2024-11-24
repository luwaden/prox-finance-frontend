import React from "react";
import { Link } from "react-router-dom";

const AddBudget = () => {
  return (
    <Link to={"/add-budget"} className='dashboard-container'>
      <div className='dashboard-box budget-box'>
        <h2>Add Budget</h2>
        <h1>+</h1>
        <span className='growth negative'>-5%</span>
      </div>
    </Link>
  );
};

export default AddBudget;
