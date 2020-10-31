import React from "react";
import { useStateValue } from "../StateProvider";
import IncomeTransaction from "./IncomeTransaction";

const IncomeList = () => {
  const [{ incomeTransaction }, dispatch] = useStateValue();
  return (
    <div className="transactions transactions-income">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {incomeTransaction?.map((transaction) => (
          <IncomeTransaction
            id={transaction.id}
            incomeText={transaction.incomeText}
            incomeAmount={transaction.incomeAmount}
          />
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
