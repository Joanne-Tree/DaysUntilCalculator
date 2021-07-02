import logo from './logo.svg';
import './App.css';
import trigger from './components/trigger';
import React, {component} from 'react';
//import functionClick from './components/functionClick';

function App() {
  return (
    <div className="App">
      
      <trigger/>
      <functionClick/>

    <div>
     <div>
      <p>This page should give you a count of the number of days from today to Christmas Day, New Years Day and Valentines Day. </p> 
     </div>

     <div>
      <ul id="days-until"></ul>
     </div>
     
     </div>
     </div>
        );
}

export default App;
