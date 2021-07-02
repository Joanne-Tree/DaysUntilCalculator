import logo from './logo.svg';
import './App.css';
import React, {component} from 'react';
import FunctionClick from './components/FunctionClick';
import ShowDaysUntil from './components/ShowDaysUntil';

function App() {
  return (
    <div className="App">
    

    <div>
     <div>
      <p>This page should give you a count of the number of days from today to Christmas Day, New Years Day and Valentines Day. </p> 
     </div>
     <FunctionClick/>
     <ShowDaysUntil/>
     <div>
      <ul id="days-until"></ul>
     </div>
     
     </div>
     </div>
        );
}

export default App;
