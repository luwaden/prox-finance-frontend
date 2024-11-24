import React from "react";
import IncomeForm from "../../Editfile/IncomeForm";

const EditIncomeForm = () => {
  const details = {
    title: "Business Bonus",
    date: "19 March 2021 at 7:21 PM",
    amount: 500,
    category: "Receive",
    description: "Bonus received from business partner.",
  };
  const onSubmit = () => {};
  return (
    <>
      <IncomeForm type='Edit' details={details} onSubmit={onSubmit} />
    </>
  );
};

export default EditIncomeForm;
