import React, { useState } from "react";
import "./incomedetail.css";

interface Income {
  title: string;
  date: string;
  invoiceId: string;
  amount: number;
  category: string;
  description: string;
}

const IncomeTable: React.FC = () => {
  const [transactions] = useState<Income[]>([
    {
      title: "Freelance Payment",
      date: "21 March 2021 at 8:45 PM",
      invoiceId: "OP01214784",
      amount: 250,
      category: "Receive",
      description: "Payment for freelance web development project.",
    },
    {
      title: "Investment Return",
      date: "20 March 2021 at 9:28 AM",
      invoiceId: "OP01214784",
      amount: 200,
      category: "Deposit",
      description: "Monthly return on investment from stocks.",
    },
    {
      title: "Business Bonus",
      date: "19 March 2021 at 7:21 PM",
      invoiceId: "OP87452148",
      amount: 500,
      category: "Receive",
      description: "Bonus received from business partner.",
    },
  ]);

  const handleDetails = (description: string) => {
    alert(description);
  };

  return (
    <div className='income-table-container'>
      <div className='table-header'>
        <h1>Income History</h1>
        <button>Add Budget</button>
      </div>
      <table className='income-table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Income ID</th>
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
              <td>{transaction.invoiceId}</td>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncomeTable;
