import React from "react";
import IncomeForm from "../../Form/IncomeForm";

const EditIncomeForm = () => {
  const details = {
    id: "",
    title: "",
    date: "",
    amount: 0,
    category: "",
    description: "",
  };
  const onSubmit = () => {
    console.log("Income edited successfully");
  };
  return (
    <>
      <IncomeForm type='Edit' details={details} onSubmit={onSubmit} />
    </>
  );
};

export default EditIncomeForm;
