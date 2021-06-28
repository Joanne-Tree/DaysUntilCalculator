import logo from './logo.svg';
import './App.css';

function App() {
  const today = new Date();
  const xmas = new Date(2021, 12, 25);
  const newYear = new Date(2022, 01, 01);
  const valentines = new Date(2022, 02, 14);
  const calculation = 24 * 3600 * 1000;
  
  function calculateDaysTo(date) {
    const daysTo = parseInt((date - today) / calculation);
    return daysTo;
  }
  
  const daysToXmas = calculateDaysTo(xmas);
  const daysToNewYear = calculateDaysTo(newYear);
  const daysToValentines = calculateDaysTo(valentines);
  
  $("#trigger").click(function () {
    $("#days-until").append(
      "<li>" +
        daysToXmas.toString() +
        " days until Christmas</li>" +
        "<li>" +
        daysToNewYear.toString() +
        " days until New Year</li>" +
        "<li>" +
        daysToValentines.toString() +
        " days until Valentines Day</li>"
    );
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
