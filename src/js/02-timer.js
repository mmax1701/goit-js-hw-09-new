import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const input = document.querySelector('#datetime-picker')
const start = document.querySelector('button[data-start]')
const days = document.querySelector('span[data-days]')
const hours = document.querySelector('span[data-hours]')
const minutes = document.querySelector('span[data-minutes]')
const seconds = document.querySelector('span[data-seconds]')


start.disabled = true;

let getDate

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      const date = new Date();
      // console.log(selectedDates[0]);
        if (date.getTime() > selectedDates[0].getTime()) {
            window.alert("Please choose a date in the future");
        } else {
            start.disabled = false;
          // getDate = convertMs((selectedDates[0].getTime() - date.getTime()))
          // getDate = selectedDates[0].getTime() - date.getTime()
          getDate = selectedDates[0].getTime()
        }
  },
};

const fp = flatpickr(input, options);


start.addEventListener('click', onClick)

function onClick() {
    start.disabled = true;
  // const newDate = convertMs(getDate)
  
 const timer = setInterval(() => {
    const date = getDate - (new Date().getTime());

    days.textContent = addLeadingZero(convertMs(date).days);
    hours.textContent = addLeadingZero(convertMs(date).hours);
    minutes.textContent = addLeadingZero(convertMs(date).minutes);
    seconds.textContent = addLeadingZero(convertMs(date).seconds);
 }, 1000)
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0')
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}



