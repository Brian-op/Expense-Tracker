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
                 
                 required />
                <br />

                <input
                 type='text'
                 placeholder="Enter Expense Description..." 
                 
                 required />
                <br />

                <input
                //  id="task-input" 
                type='text'
                
                 placeholder="Enter Expence Category..." required />
                <br />

                <input 
                placeholder="Enter Amount..." 
                type='number'
                
                min={1} 
                required />
                <br />

                <input 
                type="date" 
                 
                />
                <br />
                <button>Submit Expense</button>

				
			</form>
    </div>
    
  )
}

export default ExpenseForm