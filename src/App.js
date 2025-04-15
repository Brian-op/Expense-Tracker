import React, { useState } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpensesTable from './components/ExpensesTable';

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      name: 'Groceries',
      description: 'Bought fruits and vegetables',
      category: 'Food',
      amount: 30.5,
      date: '2025-04-12'
    },
    {
      name: 'Internet Bill',
      description: 'Monthly subscription',
      category: 'Utilities',
      amount: 50,
      date: '2025-04-10'
    }

  ]);

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <div>
      <Header />
      <ExpenseForm onAddExpense={addExpense} />
      <ExpensesTable expenses={expenses} />

    </div>
  );
};

export default App;