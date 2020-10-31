import React from "react";
import { useStateValue } from "../StateProvider";
import ExpenseTransaction from "./ExpenseTransaction";
const ExpenseList = () => {
  const [{ expenseTransaction }] = useStateValue();
  console.log(expenseTransaction);

  return (
    <div className="transactions transactions-expense">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {expenseTransaction?.map((transaction) => (
          <ExpenseTransaction
            id={transaction.id}
            expenseText={transaction.expenseText}
            expenseAmount={transaction.expenseAmount}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
