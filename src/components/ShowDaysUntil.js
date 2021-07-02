 const today = new Date();
 const xmas = new Date(2021, 12, 25);
 const newYear = new Date(2022, 1, 1);
 const valentines = new Date(2022, 2, 14);
 const calculation = 24 * 3600 * 1000;

function CalculateDaysTo(date) {
  const daysTo = parseInt((date - today) / calculation);
  return daysTo;
}

const daysToXmas = CalculateDaysTo(xmas);
const daysToNewYear = CalculateDaysTo(newYear);
const daysToValentines = CalculateDaysTo(valentines);

function ShowDaysUntil() {
      return (
        daysToXmas.toString() +
        " days until Christmas. " +
        daysToNewYear.toString() +
        " days until New Year. " +
        daysToValentines.toString() +
        " days until Valentines Day. "
    );
}

export default ShowDaysUntil;

