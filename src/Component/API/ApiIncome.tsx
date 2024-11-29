import axios from "axios";
import { IncomeData } from "../model/income.model";

const BASE_URL = "http://localhost:5000/api/v1/income";

// Fetch all income data
export const fetchIncomeApi = async (): Promise<IncomeData[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/get-income`);
    return response.data.data;
  } catch (error) {
    return []; // Ensure the function still returns a valid value in case of an error
  }
};

// Add new income
export const addIncomeApi = async (newIncome: IncomeData): Promise<void> => {
  await axios.post(`${BASE_URL}/add-income`, newIncome, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const deleteIncomeApi = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
