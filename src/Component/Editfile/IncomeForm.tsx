import { IncomeData } from "../model/income.model";
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import "./Edit.css";
import { log } from "console";

export interface IIncomeFormProps {
  type: "Add" | "Edit";
  details?: TDetails;
  onSubmit: (e: TDetails) => void;
}

type TDetails = {
  _id?: string;
  title: string;
  date: string;
  amount: number;
  category: string;
  description: string;
};

const IncomeForm: React.FC<IIncomeFormProps> = ({ type, details }) => {
  const [incomeData, setIncomeData] = useState<IncomeData>({
    title: "",
    date: "",
    amount: "",
    category: "",
    description: "",
  });
  const navigate = useNavigate();
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
    console.log("submit is working");

    try {
      if (type === "Add") {
        const response = await axios.post(
          `http://localhost:5000/api/v1/income/add-income`,
          incomeData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("income added:", response);
      } else if (type === "Edit") {
        if (!details || !details._id) {
          console.error("Error: Missing details._id for editing.");
          return;
        }

        const response = await axios.put(
          `http://localhost:5000/api/v1/income/add-income/${details._id}`,
          incomeData
        );
        console.log("Income updated:", response.data);
        setIncomeData({
          title: "",
          date: "",
          amount: "",
          category: "",
          description: "",
        });
        navigate("income-details");
      }
    } catch (error) {
      console.error("Error submitting income:", error);
    }
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
          <button onClick={handleSubmit} type='submit' className='saveBtn'>
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
