import React from "react";
import { Link } from "react-router-dom";

const AddIncome = () => {
  return (
    <Link to={"/add-income"} className='dashboard-container'>
      <div className='dashboard-box income-box'>
        <h2>Add Income</h2>
        <h1>+</h1>
        <span className='growth positive'>+5%</span>
      </div>
    </Link>
  );
};

export default AddIncome;
