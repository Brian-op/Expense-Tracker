import React from 'react'

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
         <tr>
         <td width="1">Expenses</td>

          <td  width="1">Description</td>

          <td  width="">Category</td>        
        
          <td  width="">Amount</td>        

         <td width="">Date</td>
         </tr>
        </tbody>

      </table>
      
      
    </div>
  )
}

export default ExpensesTable