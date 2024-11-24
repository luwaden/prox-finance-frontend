import React, { useEffect, useState } from "react";
import "./incomeTable.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IncomeData } from "../../model/income.model";

const IncomeTable: React.FC = () => {
  const [transactions] = useState<IncomeData[]>([
    {
      title: "Freelance Payment",
      date: "21 March 2021 at 8:45 PM",
      amount: "250",
      category: "Receive",
      description: "Payment for freelance web development project.",
    },
    {
      title: "Investment Return",
      date: "20 March 2021 at 9:28 AM",
      amount: "200",
      category: "Deposit",
      description: "Monthly return on investment from stocks.",
    },
    {
      title: "Business Bonus",
      date: "19 March 2021 at 7:21 PM",

      amount: "500",
      category: "Receive",
      description: "Bonus received from business partner.",
    },
  ]);
  const navigate = useNavigate();

  const handleDetails = (description: string) => {
    alert(description);
  };

  return (
    <div className='income-table-container'>
      <div className='table-header'>
        <h1>Income History</h1>
        <button>
          <Link to={"/add-income"} className='add-btn'>
            Add Income
          </Link>
        </button>
      </div>
      <table className='income-table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Update</th>
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
                  onClick={() => navigate("/edit-income")}>
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
      <button>
        <Link to={"/"} className='add-btn'>
          Back
        </Link>
      </button>
    </div>
  );
};

export default IncomeTable;
