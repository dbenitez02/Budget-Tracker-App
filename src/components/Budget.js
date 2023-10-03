import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
   const { budget, dispatch } = useContext(AppContext);
   const [newBudget, setBudget] = useState('');
   const [form, setForm] = useState(false);
   const [displayWarning, setDisplayWarning] = useState(false);

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

      if(newBudget !== '') {
         dispatch({
            type: 'BUDGET_UPDATE',
            payload: newBudget,
         })

         setBudget('');
         setForm(false);
      }
      else {
         setDisplayWarning(true);
      }

   }

   function btnForm() {
      setForm(true);

   }
   return (
      <div className='alert alert-secondary'>
         <span>Budget: ${budget}</span>
         {form ?
            <>
               <form onSubmit={handleBudgetEdit}>
                  <div className='col-sm'>
                  {displayWarning &&
                     <div className='alert alert-danger' role='alert'>
                        Fill out the field
                     </div>
                  }
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
            </>
            :
            <button className='m-1 btn btn-primary' onClick={btnForm}>Edit budget</button>
         }
      </div>
   );
}


export default Budget;