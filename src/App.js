import logo from './logo.svg';
import './App.css';
import trigger from './components/trigger';
import React, {component} from 'react';

function App() {
  return (
    <div className="App">
      <script
			  src="https://code.jquery.com/jquery-3.6.0.min.js"
			  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
			  crossorigin="anonymous"></script>
      <trigger/>
<div>
 <div>
  <p>This page should give you a count of the number of days from today to Christmas Day, New Years Day and Valentines Day. </p> 
  </div>

  <div>
    <ul id="days-until"></ul>
  </div>

  <div>
    <button id="trigger">Show Days Until</button>
  </div>
</div>


    </div>
  );
}

export default App;
