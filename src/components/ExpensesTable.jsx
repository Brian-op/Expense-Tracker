import React from 'react';

const ExpensesTable = ({ expenses }) => {
  return (
    <div className='table'>
      <table border="10" cellPadding={10}>
        <thead>
          <tr>
            <th width="100">Expenses</th>
            <th width="100">Description</th>
            <th width="100">Category</th>
            <th width="100">Amount</th>
            <th width="100">Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.name}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesTable;
