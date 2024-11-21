// import { IncomeData } from "../model/income.model";

// import React, { useState } from "react";
// import "./Edit.css";

// export interface IncomeFormProps {
//   onAddTransaction?: (data: IncomeData) => void;
// }

// const EditIncome: React.FC<IncomeFormProps> = ({
//   onAddTransaction = () => {},
// }) => {
//   const [incomeData, setIncomeData] = useState<IncomeData>({
//     title: "",
//     date: "",
//     amount: "",
//     category: "",
//     description: "",
//   });

//   // Handle form input changes
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setIncomeData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (onAddTransaction) {
//       onAddTransaction(incomeData);
//     }
//     setIncomeData({
//       title: "",
//       date: "",
//       amount: "",
//       category: "",
//       description: "",
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className='edit-income'>
//         <input
//           name='title'
//           type='text'
//           className='edit-title'
//           placeholder='Add your income title'
//           value={incomeData.title}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type='date'
//           name='date'
//           className='edit-date'
//           value={incomeData.date}
//           onChange={handleChange}
//           required
//         />
//         <input
//           name='amount'
//           type='text'
//           className='edit-amount'
//           placeholder='Add your income amount'
//           value={incomeData.amount}
//           onChange={handleChange}
//           required
//         />
//         <input
//           name='category'
//           type='text'
//           className='edit-category'
//           placeholder='Add your income category'
//           value={incomeData.category}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name='description'
//           className='edit-description'
//           placeholder='Add a description (optional)'
//           value={incomeData.description}
//           onChange={handleChange}></textarea>
//         <div className='editNoteBtn'>
//           <button type='submit' className='saveBtn'>
//             Save Income
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditIncome;

export {};
