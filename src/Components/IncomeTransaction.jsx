import React from "react";
import { useStateValue } from "../StateProvider";

const IncomeTransaction = ({ id, incomeText, incomeAmount }) => {
  const [{}, dispatch] = useStateValue();
  const deleteIncome = () => {
    console.log("income deleted");
    dispatch({
      type: "DELETE_INCOME",
      id: id,
    });
  };
  return (
    <li className="transaction">
      <span className="transaction-text">{incomeText} </span>
      <span className="transaction-amount">${incomeAmount} </span>
      <button onClick={deleteIncome} className="delete-btn">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default IncomeTransaction;
