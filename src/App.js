import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeList from "./Components/IncomeList";
import ExpenseList from "./Components/ExpenseList";
import AddTransaction from "./Components/AddTransaction";
function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <Balance />
        <IncomeList />
        <ExpenseList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
