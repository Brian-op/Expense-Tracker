import React from 'react'
import dummyExpenses from './dummyExpenses'

const ExpensesTable = () => {

  return (
    <div className='table'>
      <table border="10" cellPadding={10}>
        <thead>
         <tr>
         <th width="100">Expenses</th>
         <th  width="100">Description</th>
         <th  width="100">Category</th>
         <th  width="100">Amount</th>
         <th width="100">Date</th>
         </tr>
        </thead>

        <tbody>
          {dummyExpenses.map((expense, index)=>(
            <tr key={index}>
          {/* destructure */}
         <td width="1">{expense.name}</td>
          <td width="1">{expense.description}</td>
          <td width="1">{expense.category}</td>                
          <td width="1">{expense.amount}</td>        
         <td width="1">{expense.date}</td>
         </tr>
          ))}
         
        </tbody>

      </table>
      
      
    </div>
  )
}

export default ExpensesTable