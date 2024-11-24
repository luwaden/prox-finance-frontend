import { IncomeData } from "../model/income.model";
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import "./Edit.css";

export interface IIncomeFormProps {
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

const IncomeForm: React.FC<IIncomeFormProps> = ({
  type,
  details,
  onSubmit,
}) => {
  const [incomeData, setIncomeData] = useState<IncomeData>({
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
    setIncomeData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIncomeData({
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
          value={incomeData.title}
          onChange={handleChange}
          required
        />
        <input
          type='date'
          name='date'
          className='edit-date'
          value={incomeData.date}
          onChange={handleChange}
          required
        />
        <input
          name='amount'
          type='text'
          className='edit-amount'
          placeholder='Add your income amount'
          value={incomeData.amount}
          onChange={handleChange}
          required
        />
        <input
          name='category'
          type='text'
          className='edit-category'
          placeholder='Add your income category'
          value={incomeData.category}
          onChange={handleChange}
          required
        />
        <textarea
          name='description'
          className='edit-description'
          placeholder='Add a description (optional)'
          value={incomeData.description}
          onChange={handleChange}></textarea>
        <div className='editNoteBtn'>
          <button type='submit' className='saveBtn'>
            Save Income
          </button>
        </div>
      </form>
      <button>
        <Link to={"/income-details"} className='add-btn'>
          Back
        </Link>
      </button>
    </div>
  );
};

export default IncomeForm;
