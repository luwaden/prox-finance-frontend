import React, { useState, useEffect } from "react";
import "./incomeTable.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  fetchIncomeApi,
  addIncomeApi,
  deleteIncomeApi,
} from "../../API/ApiIncome";
import { IncomeData } from "../../model/income.model";
import IncomeForm from "../../Form/IncomeForm";

const IncomeTable: React.FC = () => {
  const [income, setIncome] = useState<IncomeData[]>([]);
  const [showForm, setShowForm] = useState(false);

  const fetchIncome = async () => {
    try {
      const incomeData = await fetchIncomeApi();
      console.log("Fetched income data:", incomeData);
      if (Array.isArray(incomeData)) {
        setIncome(incomeData);
        console.log("Income state updated:", incomeData);
      } else {
        console.error("Fetched data is not an array:", incomeData);
        setIncome([]);
      }
    } catch (error) {
      console.error("Error fetching income data:", error);
    }
  };

  const handleIncomeAdded = async (newIncome: IncomeData) => {
    try {
      await addIncomeApi(newIncome); // Add income to the backend
      fetchIncome(); // Refresh the table
    } catch (error) {
      console.error("Error adding income:", error);
    }
  };

  const handleDeleteIncome = async (deleteIncome: IncomeData) => {
    try {
      await deleteIncomeApi(deleteIncome._id);
      console.log(`Successfully deleted income with id: ${deleteIncome._id}`);
    } catch (error) {
      console.error("Error deleting income:", error);
    }
  };

  // Fetch income on component mount
  useEffect(() => {
    console.log("Component mounted");
    fetchIncome();
  }, []);

  return (
    <div className='income-table-container'>
      <div className='table-header'>
        <h1>Income History</h1>
        <button className='add-btn' onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close Form" : "Add Income"}
        </button>
      </div>

      {/* Show IncomeForm when "Add Income" is clicked */}
      {showForm && (
        <IncomeForm
          type='Add'
          onSubmit={handleIncomeAdded} // Pass callback to update table
        />
      )}

      <table className='income-table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {income.length > 0 ? (
            income.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.title}</td>
                <td>{new Date(transaction.date).toLocaleDateString()}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.category || "N/A"}</td>
                <td>
                  <button className='details-button'>Edit</button>

                  <button
                    onClick={() => {
                      handleDeleteIncome(transaction);
                      fetchIncome();
                    }}
                    className='details-button'>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                No income records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default IncomeTable;
