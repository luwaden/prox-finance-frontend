import ExpenseForm from "../../Editfile/ExpensesForm";

import React from "react";

const EditExpensesForm = () => {
  const details = {
    title: "Investment Return",
    date: "20 March 2021 at 9:28 AM",
    amount: 200,
    category: "Deposit",
    description: "Monthly return on investment from stocks.",
  };

  const onSubmit = () => {};

  return (
    <div>
      <ExpenseForm type='Edit' details={details} onSubmit={onSubmit} />
    </div>
  );
};

export default EditExpensesForm;
