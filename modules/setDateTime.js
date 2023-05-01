import { DateTime } from './luxon.js';

export const dateTime = () => {
  const dt = DateTime.now();
  const dateContainer = document.getElementById('date-container');
  const time = dt.toLocaleString(DateTime.DATETIME_MED);
  dateContainer.innerHTML = time;
};

export default dateTime;