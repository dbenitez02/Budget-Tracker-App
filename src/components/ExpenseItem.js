import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
   const {dispatch} = useContext(AppContext);

   const handleDeleteExpense = () => {
      dispatch ({
         type: 'DELETE_EXPENSE',
         payload: props.id,
      });
   }
   return (
      <li className='list-group-item d-flex justify-content-between align-items-center'>
         <div>
            {props.name} 
            <div className="form-text">ID: {props.id}</div>
         </div>
         <div>
            {/**Lol for some reason badge-primary couldnt work so I had to make do*/}
            <span className="badge" style={{ backgroundColor: "#187bdd"}}>
               ${props.cost}
            </span>
               <button className="btn btn-danger btn-sm" style={{ marginLeft: "10px"}} onClick={handleDeleteExpense}>X</button>
         </div>
      </li>
   )
};

export default ExpenseItem;