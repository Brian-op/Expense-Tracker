import React, { useState } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpensesTable from './components/ExpensesTable';
import SearchBar from './components/SearchBar';

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
  const [searchCategory,setSearchCategory] = useState('')

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const filteredExpenses = expenses.filter((expense)=>`${expense.name} ${expense.description} ${expense.category}`
  .toLowerCase()
  .includes(searchCategory.toLowerCase()))

  return (
    <div>
      <Header />
      <ExpenseForm onAddExpense={addExpense} />
     
      <SearchBar
      searchCategory={searchCategory}
      onSearchChange={setSearchCategory}
      />
       <ExpensesTable expenses={filteredExpenses} />

    </div>
  );
};

export default App;