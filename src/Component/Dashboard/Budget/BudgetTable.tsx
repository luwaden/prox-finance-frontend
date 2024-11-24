import React, { useState } from "react";
import "./BudgetTable.css";
import { Link } from "react-router-dom";

interface Budget {
  title: string;
  date: string;
  amount: number;
  category: string;
  description: string;
}

const BudgetTable: React.FC = () => {
  const [transactions] = useState<Budget[]>([
    {
      title: "Freelance Payment",
      date: "21 March 2021 at 8:45 PM",
      amount: 250,
      category: "Receive",
      description: "Payment for freelance web development project.",
    },
    {
      title: "Investment Return",
      date: "20 March 2021 at 9:28 AM",
      amount: 200,
      category: "Deposit",
      description: "Monthly return on investment from stocks.",
    },
    {
      title: "Business Bonus",
      date: "19 March 2021 at 7:21 PM",
      amount: 500,
      category: "Receive",
      description: "Bonus received from business partner.",
    },
  ]);

  const handleDetails = (description: string) => {
    alert(description);
  };

  return (
    <div className='Budget-table-container'>
      <div className='table-header'>
        <h1>Budget History</h1>
        <button>
          <Link to={"/add-budget"} className='add-btn'>
            Add Budget
          </Link>
        </button>
      </div>
      <table className='Budget-table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.title}</td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td className={transaction.category.toLowerCase()}>
                {transaction.category}
              </td>
              <td>
                <button
                  className='details-button'
                  onClick={() => handleDetails(transaction.description)}>
                  Details
                </button>

                <button
                  className='details-button'
                  onClick={() => handleDetails(transaction.description)}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetTable;
