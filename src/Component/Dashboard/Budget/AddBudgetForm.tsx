import React from "react";
import BudgetForm from "../../Editfile/BudgetForm";

const AddBudgetForm = () => {
  const onSubmit = () => {};
  return (
    <div>
      <BudgetForm type='Add' onSubmit={onSubmit} />
    </div>
  );
};

export default AddBudgetForm;
