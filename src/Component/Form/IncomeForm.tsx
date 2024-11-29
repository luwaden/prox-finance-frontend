import React, { useState } from "react";
import { IncomeData } from "../model/income.model";

interface IncomeFormProps {
  type: "Add" | "Edit";
  details?: {
    id: string;
    title: string;
    date: string;
    amount: number;
    category: string;
    description: string;
  };
  onSubmit: (newIncome: IncomeData) => void;
}

const IncomeForm: React.FC<IncomeFormProps> = ({ type, onSubmit }) => {
  const [incomeData, setIncomeData] = useState<IncomeData>({
    _id: "",
    title: "",
    date: "",
    amount: 0,
    category: "",
    description: "",
  });

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setIncomeData((prev) => ({
      ...prev,
      [name]: name === "amount" ? parseFloat(value) || 0 : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(incomeData); // Pass data to parent component
    setIncomeData({
      _id: "",
      title: "",
      date: "",
      amount: 0,
      category: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className='edit-income'>
      <h3>{`${type} Income`}</h3>
      <input
        name='title'
        type='text'
        placeholder='Add your income title'
        value={incomeData.title}
        onChange={handleChange}
        required
      />
      <input
        name='date'
        type='date'
        value={incomeData.date}
        onChange={handleChange}
        required
      />
      <input
        name='amount'
        type='number'
        placeholder='Add your income amount'
        value={incomeData.amount}
        onChange={handleChange}
        required
      />
      <input
        name='category'
        type='text'
        placeholder='Add your income category'
        value={incomeData.category}
        onChange={handleChange}
        required
      />
      <textarea
        name='description'
        placeholder='Add a description (optional)'
        value={incomeData.description}
        onChange={handleChange}></textarea>
      <button type='submit'>Save Income</button>
    </form>
  );
};

export default IncomeForm;
