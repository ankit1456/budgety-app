import React, { useState } from "react";
import { useStateValue } from "../StateProvider";
import { v4 as uuidv4 } from "uuid";

const AddTransaction = () => {
  const [{}, dispatch] = useStateValue();
  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });
  const { incomeText, incomeAmount } = income;
  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });
  const { expenseText, expenseAmount } = expense;
  const onSubmitIncome = (e) => {
    e.preventDefault();
    if (incomeText != "") {
      dispatch({
        type: "ADD_INCOME",
        newIncome: {
          id: uuidv4(),
          incomeText: incomeText,
          incomeAmount: incomeAmount * 1,
        },
      });
      setIncome({
        incomeText: "",
        incomeAmount: 0,
      });
    }
  };
  const onSubmitExpense = (e) => {
    e.preventDefault();
    if (expenseText != "") {
      dispatch({
        type: "ADD_EXPENSE",
        newExpense: {
          id: uuidv4(),
          expenseText: expenseText,
          expenseAmount: expenseAmount * 1,
        },
      });
      setExpense({
        expenseText: "",
        expenseAmount: 0,
      });
    }
  };
  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };
  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };
  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            type="text"
            name="incomeText"
            placeholder="Add Income..."
            autoComplete="off"
            value={incomeText}
            onChange={onChangeIncome}
          />
          <input
            type="number"
            name="incomeAmount"
            placeholder="Amount"
            autoComplete="off"
            value={incomeAmount}
            onChange={onChangeIncome}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input
            type="text"
            name="expenseText"
            placeholder="Add Expense..."
            autoComplete="off"
            value={expenseText}
            onChange={onChangeExpense}
          />
          <input
            type="number"
            name="expenseAmount"
            placeholder="Amount"
            autoComplete="off"
            value={expenseAmount}
            onChange={onChangeExpense}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
