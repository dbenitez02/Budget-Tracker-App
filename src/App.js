import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import TotalSpent from './components/TotalSpent';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import Header from './components/Header';
import { AppProvider } from './context/AppContext';
import { useState } from 'react';


function App() {
  const [darkMode, setDarkmode] = useState(false);

  return (
    <AppProvider>
      
        <div className={`${darkMode && 'dark-mode'}`}>
          <div className='container'>
          <Header handleToggle={setDarkmode}/>
          <div className='row mt-3'>
            <div className='col-sm'>
              <Budget />
            </div>
            <div className='col-sm'>
              <Remaining />
            </div>
            <div className='col-sm'>
              <TotalSpent />
            </div>
          </div>
          <h3 className='mt-3'>Expenses</h3>
          <div className='row mt-3'>
            <div className='col-sm'>
              <ExpenseList />
            </div>
          </div>
          <h3 className='mt-3'>Add Expense</h3>
          <div className='row mt-3'>
            <div className='col-sm'>
              <AddExpenseForm />
            </div>
          </div>
        </div>
      </div>
    </AppProvider>

  );
}

export default App;
