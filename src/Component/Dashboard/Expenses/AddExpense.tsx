import React from "react";
import { Link } from "react-router-dom";

const AddExpenses = () => {
  return (
    <Link to={"/add-expense"} className='dashboard-container'>
      <div className='dashboard-box expenses-box'>
        <h2>Add Expenses</h2>
        <h1>+</h1>
        <span className='growth negative'>-5%</span>
      </div>
    </Link>
  );
};

export default AddExpenses;
