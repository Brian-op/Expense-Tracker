import React, {useState } from 'react'

const ExpenseForm = () => {
  //declare form values
  const[expenseName, setExpenseName]= useState('')
  const[expenseDescription, setExpenseDescription]= useState('')
  const[expenseCategry, setExpenseCategory]= useState('')
  const[expenseAmount, setExpenseAmount]= useState('')
  const[dateOfExpense, setDateOfExpense]= useState('')
  
  //Submit
  const handleSubmit = (event)=>{
    event.preventDefault()
    
    alert('Your Expense has been updated')
    console.log({
      expenseName,
      expenseDescription,
      expenseCategry,
      expenseAmount,
      dateOfExpense,
    });
  };
  return (
    <div>
        <div className='FormHeader'>
            <h2>ExpenseForm</h2>
            <p>Enter Your expense details below</p>
         </div>
        <form id="expenses-form"
		    onSubmit={handleSubmit}
        
        >
				<input
                 type='text' 
                 placeholder="Enter Expense Name..." 
                 value={expenseName}
                 onChange={(event)=>setExpenseName(event.target.value)}
                 required />
                <br />

                <input
                 type='text'
                 placeholder="Enter Expense Description..." 
                 value={expenseDescription}
                 onChange={(event)=>setExpenseDescription(event.target.value)}
                 required />
                <br />

                <input
                //  id="task-input" 
                type='text'
                value={expenseCategry}
                onChange={(event)=>setExpenseCategory(event.target.value)}
                 placeholder="Enter Expence Category..." required />
                <br />

                <input 
                placeholder="Enter Amount..." 
                type='number'
                value={expenseAmount}
                onChange={(event)=>setExpenseAmount(event.target.value)} 
                min={1} 
                required />
                <br />

                <input 
                type="date" 
                 value={dateOfExpense}
                 onChange={(event)=>setDateOfExpense(event.target.value)}
                />
                <br />
                <button>Submit Expense</button>
                

				
			</form>
      
    </div>
    
  )
}

export default ExpenseForm