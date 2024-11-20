import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Income = () => {
  //title, amount, category, description, type
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();

  return (
    <div className='dashboard-box income-box'>
      <form className='addIncomeForm'>
        <h2>Income</h2>
        <input
          name='title'
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          className=' addIncome'
          placeholder='type in your title'
          required
        />

        <input
          name='amount'
          type='number'
          onChange={(e) => setAmount(e.target.value)}
          className=' addAmount'
          placeholder='type in amount'
          required
        />

        <input
          name='title'
          type='text'
          onChange={(e) => setCategory(e.target.value)}
          className=' addIncome'
          placeholder='type in your title'
          required
        />
        <textarea
          name='content'
          onChange={(e) => setDescription(e.target.value)}
          className='addNote content'
          placeholder='type in your note'
          required
        />

        <input
          name='content'
          onChange={(e) => setType(e.target.value)}
          className='addNote content'
          placeholder='type in your note'
          required
        />
        <button type='submit'>Save Income</button>
      </form>
    </div>
  );
};

export default Income;
