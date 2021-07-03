import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import FunctionClick from './components/FunctionClick';

function App() {
  return (
    <div className="App">
    <div>
     <div>
      <p>This page should give you a count of the number of days from today to Christmas Day, New Years Day and Valentines Day. </p> 
     </div>
     <div>
     <FunctionClick/>
     </div>
     </div>
     </div>
        );
}

export default App;
