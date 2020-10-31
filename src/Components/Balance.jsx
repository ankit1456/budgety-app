import React from "react";
import { useStateValue } from "../StateProvider";

const Balance = () => {
  const [{ incomeTransaction, expenseTransaction }] = useStateValue();
  const IncomeAmount = incomeTransaction.map(
    (transaction) => transaction.incomeAmount
  );
  const ExpenseAmount = expenseTransaction.map(
    (transaction) => transaction.expenseAmount
  );
  const TotalIncome = IncomeAmount.reduce(
    (acc, inc) => (acc += inc),
    0
  ).toFixed(2);
  const TotalExpenses = ExpenseAmount.reduce(
    (acc, exp) => (acc += exp),
    0
  ).toFixed(2);
  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h3>${TotalIncome - TotalExpenses} </h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>+${TotalIncome} </p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>-${TotalExpenses} </p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
