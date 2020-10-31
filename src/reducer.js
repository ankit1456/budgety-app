export const initialState = {
  incomeTransaction: [],
  expenseTransaction: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_INCOME":
      return {
        ...state,
        incomeTransaction: [action.newIncome, ...state.incomeTransaction],
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        expenseTransaction: [action.newExpense, ...state.expenseTransaction],
      };
    case "DELETE_INCOME":
      return {
        ...state,
        incomeTransaction: [
          ...state.incomeTransaction.filter(
            (transaction) => transaction.id !== action.id
          ),
        ],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenseTransaction: [
          ...state.expenseTransaction.filter(
            (transaction) => transaction.id !== action.id
          ),
        ],
      };
  }
};
export default reducer;
