import React from "react";
import IncomeForm from "../../Form/IncomeForm";

const AddIncomeForm = () => {
  const onSubmit = () => {};
  return (
    <>
      <IncomeForm type='Add' onSubmit={onSubmit} />
    </>
  );
};

export default AddIncomeForm;
