import React from "react";
import IncomeForm from "../../Editfile/IncomeForm";

const AddIncomeForm = () => {
  const onSubmit = () => {};
  return (
    <>
      <IncomeForm type='Add' onSubmit={onSubmit} />
    </>
  );
};

export default AddIncomeForm;
