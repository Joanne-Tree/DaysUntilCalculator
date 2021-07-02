import React, {component} from 'react';
import $ from 'jquery';


 const today = new Date();
 const xmas = new Date(2021, 12, 25);
 const newYear = new Date(2022, 1, 1);
 const valentines = new Date(2022, 2, 14);
 const calculation = 24 * 3600 * 1000;

    function calculateDaysTo(date) {
  const daysTo = parseInt((date - today) / calculation);
  return daysTo;
}

const daysToXmas = calculateDaysTo(xmas);
const daysToNewYear = calculateDaysTo(newYear);
const daysToValentines = calculateDaysTo(valentines);

    function ShowDaysUntil() {
      return(
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
  }
export default ShowDaysUntil;

