const Header = ( { handleToggle } ) => {
   return(
      <div className="header">
         <h1 className='mt-3'>Budget Planner</h1>
         <button 
         className="dark-toggle"
         onClick={() => {
            handleToggle(prev => 
               !prev
            )
         }
         }
         >Toggle Darkmode</button>
      </div>
   );
};

export default Header;