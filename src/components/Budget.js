import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
   const { budget, dispatch } = useContext(AppContext);
   const[newBudget, setBudget] = useState('');

   // This is where we change elements to display a form textarea
   // if I somehow have it working
   const handleEditText = () => {
      return (
            <form onSubmit={handleBudgetEdit}>
               <div>
                  <input 
                     type='text'
                     className='form-control'
                     value={newBudget}
                     onChange={(event) => setBudget(event.target.value)}
                  ></input>
               </div>               
            </form> 
      )
   }
   // This is where we dispatch the playload {budget} and update budget.
   const handleBudgetEdit = (event) => {
      event.preventDefault();
      
      dispatch({
         type: 'BUDGET_UPDATE',
         payload: newBudget,
      })

      setBudget('');
   }
   return(
      <div className='alert alert-secondary'>
         <span>Budget: ${budget}</span>
         <form onSubmit={handleBudgetEdit}>
            <div className='col-sm'>
               <input 
                  type='text'
                  className='form-control'
                  value={newBudget}
                  onChange={(event) => setBudget(event.target.value)}
               ></input>
            </div>
            <div className='col-sm'>
               <button className='btn btn-outline-primary btn-sm' onClick={handleEditText}>Edit</button>
            </div>         
         </form>  
      </div>
   );
}


export default Budget;