import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const input = document.querySelector('#datetime-picker')
const start = document.querySelector('button[data-start]')

const date = new Date();
start.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        if (date.getTime() > selectedDates[0].getTime()) {
            window.alert("Please choose a date in the future");
        }
  },
};

const fp = flatpickr(input, options);





