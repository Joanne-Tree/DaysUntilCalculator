import logo from './logo.svg';
import './App.css';
import trigger from './components/trigger';

function App() {
  return (
    <div className="App">
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
