import ExpenseForm from "../../Editfile/ExpensesForm";
import React from "react";

const AddExpensesForm = () => {
  const onSubmit = () => {};

  return (
    <div>
      <ExpenseForm type='Add' onSubmit={onSubmit} />
    </div>
  );
};

export default AddExpensesForm;
