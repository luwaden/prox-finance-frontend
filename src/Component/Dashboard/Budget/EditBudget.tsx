import React from "react";
import BudgetForm from "../../Editfile/BudgetForm";

const EditBudgetForm = () => {
  const details = {
    title: "Investment Return",
    endDate: "45 March 2021 at 9:28 AM",
    startDate: "20 March 2021 at 9:28 AM",
    amount: 200,
    category: "Deposit",
    description: "Monthly return on investment from stocks.",
  };

  const onSubmit = () => {};

  return (
    <div>
      <BudgetForm type='Edit' details={details} onSubmit={onSubmit} />
    </div>
  );
};

export default EditBudgetForm;
