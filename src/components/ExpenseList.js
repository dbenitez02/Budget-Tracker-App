import React, { useContext, useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
   const { expenses } = useContext(AppContext);
   const [filterItems, setFilterItems] = useState(expenses || []);

   // Renders expenses after adding or subtracting others expenses.
   useEffect(() => {
      setFilterItems(expenses);     
      }, [expenses]);

   const searchItem = (event) => {
      event.preventDefault();

      // This filters out expenses based what the user types.
      const filter = expenses.filter((filterItems) => 
           filterItems.name.includes(event.target.value)
         );
         setFilterItems(filter);
   } 
   
   return(
      <div>
         <div>
            <input
               type="text"
               className="form-control"
               required='required'
               id='search'
               onChange={searchItem}
               placeholder="Search for expense.."
               ></input>

         </div>

         <ul className="list-group">
            {filterItems.map(((expense) => (
               <ExpenseItem  
               id={expense.id} 
               cost={expense.cost} 
               name={expense.name} />
            )))}
         </ul>
      </div>
   )
}

export default ExpenseList;
