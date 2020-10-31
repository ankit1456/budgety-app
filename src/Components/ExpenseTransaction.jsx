import React from "react";
import { useStateValue } from "../StateProvider";

const ExpenseTransaction = ({ id, expenseText, expenseAmount }) => {
  const [{}, dispatch] = useStateValue();
  const deleteExpense = () => {
    console.log("expense deleted");
    dispatch({
      type: "DELETE_EXPENSE",
      id: id,
    });
  };
  return (
    <li className="transaction">
      <span className="transaction-text">{expenseText} </span>
      <span className="transaction-amount">${expenseAmount} </span>
      <button onClick={deleteExpense} className="delete-btn">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default ExpenseTransaction;
