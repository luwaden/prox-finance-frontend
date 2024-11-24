import React, { useState } from "react";
import "./ExpenseTable.css";
import { Link } from "react-router-dom";

interface Expense {
  title: string;
  date: string;
  amount: number;
  category: string;
  description: string;
}

const ExpenseTable: React.FC = () => {
  const [transactions] = useState<Expense[]>([
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
    <div className='Expense-table-container'>
      <div className='table-header'>
        <h1>Expense History</h1>
        <button>
          <Link to={"/add-expense"} className='add-btn'>
            Add Income
          </Link>
        </button>
      </div>
      <table className='Expense-table'>
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
                  edit
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

export default ExpenseTable;
