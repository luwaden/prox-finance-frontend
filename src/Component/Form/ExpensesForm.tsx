import { ExpensesData } from "../model/expenses.model";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Edit.css";

export interface IExpensesFormProps {
  type: "Add" | "Edit";
  details?: TDetails;
  onSubmit: (e: TDetails) => void;
}
type TDetails = {
  title: string;
  date: string;
  amount: number;
  category: string;
  description: string;
};

const ExpenseForm: React.FC<IExpensesFormProps> = ({
  type,
  details,
  onSubmit,
}) => {
  const [expensesData, setExpensesData] = useState<ExpensesData>({
    title: "",
    date: "",
    amount: "",
    category: "",
    description: "",
  });

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setExpensesData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setExpensesData({
      title: "",
      date: "",
      amount: "",
      category: "",
      description: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='edit-income'>
        <h3>{`${type} income`}</h3>
        <input
          name='title'
          type='text'
          className='edit-title'
          placeholder='Add your income title'
          value={expensesData.title}
          onChange={handleChange}
          required
        />
        <input
          type='date'
          name='date'
          className='edit-date'
          value={expensesData.date}
          onChange={handleChange}
          required
        />
        <input
          name='amount'
          type='text'
          className='edit-amount'
          placeholder='Add your income amount'
          value={expensesData.amount}
          onChange={handleChange}
          required
        />
        <input
          name='category'
          type='text'
          className='edit-category'
          placeholder='Add your income category'
          value={expensesData.category}
          onChange={handleChange}
          required
        />
        <textarea
          name='description'
          className='edit-description'
          placeholder='Add a description (optional)'
          value={expensesData.description}
          onChange={handleChange}></textarea>
        <div className='editNoteBtn'>
          <button type='submit' className='saveBtn'>
            Save Income
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
